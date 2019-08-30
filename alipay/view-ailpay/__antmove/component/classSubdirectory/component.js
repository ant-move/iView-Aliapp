const utils = require('../../api/utils');
const { warnLife, fnAppClass, browserPath } = utils;
const createNode = require('./relation');
let posix = browserPath();
function getUrl () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    my.setStorageSync({
        key: '_pageMsg',
        data: {
            pageName: _name,
            pagePath: url
        }
    });
    return url;
}


function updateData () {
    let ctx = this;

    if (typeof ctx.properties === 'object') {
        ctx.properties.name = ctx.properties.name || '';
        ctx.properties.value = ctx.properties.value || null;
        Object.keys(ctx.properties)
            .forEach((item) => {
                if (ctx.props[item] !== undefined && typeof ctx.props[item] !== 'function' && item[0] !== '$' && ctx.data[item] !== ctx.props[item]) {
                    // Object.defineProperty(ctx.data, item, {
                    //     get () {
                    //         return ctx.props[item];
                    //     },
                    //     enumerable: true
                    // });
                    ctx.setData({
                        [item]: ctx.props[item]
                    });
                }
            });
    }
  
}
  
function processMethods (_opts = {}) {
    let methods = {};
    Object.keys(_opts.methods || {})
        .forEach(function (method) {
            let fn = _opts.methods[method];
            methods[method] = function (...p) {  
                if (p[0] && typeof p[0] === 'object' && p[0].timeStamp && p[0].target) {
                    this._currentEvent = p[0];
                }              
                return fn.apply(this, p);
            };
        });
    _opts.methods = methods;
    
    return _opts;
}

function processRelationPath (self, relation) {
    let from = self.is, to = relation;
    if (to[0] === '.') {
        to = '../' + to;
    }
    let _p = posix.join(from, to);
    return _p;
}
function handleRelations () {
    if (this.props.theRelations) {
        
        this.getRelationNodes = function (_p) {
            this._storeRelationNodes = this._storeRelationNodes || {};
            return this._storeRelationNodes[_p];
        };
  
        Object.keys(this.props.theRelations)
            .forEach((relation)=> {
                let _p = processRelationPath(this, relation);
                  
                let relationInfo = this.props.theRelations[relation];
                let nodes = findRelationNode(this.$node, _p, relationInfo.type, true);// this.$node.getRootNode().$nodes[_p];
                if (!nodes) return false;
                nodes.forEach((n) => {
                    if (!n) {
                        // console.error('wrong relation reference of ', relationInfo);
                        // console.error('from: ', this.$node.$self.is, 'to: ', _p);
                        return false;
                    }
                    _relationNode.call(this, n);
                });
  
                function _relationNode (node) {
                    node = node.$self;
  
                    this._storeRelationNodes = this._storeRelationNodes || {};
                    if (this._storeRelationNodes[_p]) {
                        this._storeRelationNodes[_p].push(node);
                    } else {
                        this._storeRelationNodes[_p] = [node];
                    }
                    
                    if (this._storeRelationNodes[relation]) {
                        this._storeRelationNodes[relation].push(node);
                    } else {
                        this._storeRelationNodes[relation] = [node];
                    }
                    let ctx = this || {};

  
                    if (typeof relationInfo.linked === 'function') {
                        relationInfo.linked.call(ctx, node);
                    }
  
                    if (typeof relationInfo.linkChanged === 'function') {
                        let self = this;
                        ctx._lifes = ctx._lifes || {};
                        ctx._lifes.didUpdate = ctx._lifes.didUpdate || [];
                        ctx._lifes.didUpdate.push(() => {
                            relationInfo.linkChanged.call(self, node);
                        });
                    }
  
                    if (typeof relationInfo.unlinked === 'function') {
                        let self = this;
                        ctx._lifes = ctx._lifes || {};
                        ctx._lifes.didUnmount = ctx._lifes.didUnmount || [];
                        ctx._lifes.didUnmount.push(() => {
                            relationInfo.unlinked.call(self, node);
                        });
                    }
                }
            });
    }
}

  
function findRelationNode (node, p, type, isArray = false) {
    // parent child ancestor descendant
    let nodes = [];
    let _prcess = {
        parent: function (node) {
            if (!node || !node.$parent) return ;
            let _p = node.$parent.$self.is || node.$parent.$self.route;
            if (_p === p) {
                return node.$parent;
            }
        },
        child: function (node) {
            let _child = null;
            node.$children
                .forEach(function (child) {
                    let _p = child.$self.is;
                    if (_p === p) {
                        _child = child;
  
                        if (!isArray) {
                            return _child;
                        }
                        nodes.push(_child);
                    }
                });
            return _child;
        },
        ancestor: function (node) {
            if (!node) return ;
            let _node = null;
  
            _node = _prcess.parent(node);
            if (!_node) {
                _node = _prcess.ancestor(node.$parent);
            }
            return _node;
        },
        descendant: function (node) {
            let _node = null;
            _node = _prcess.child(node);
  
            if (!_node) {
                node.$children
                    .forEach(function (c) {
                        _node = _prcess.child(c);
  
                        if (!_node) {
                            _node = _prcess.descendant(c);
                        }
                    });
            }
  
            return _node;
        }
    };
  
    let ret = _prcess[type](node);
  
    if (isArray) {
        if (type === 'parent' || type === 'ancestor') return [ret];
        return nodes;
    } 
    return ret;
      
}

function behaviorsAssign (_opts, item, res) {
    let obj = {};
    if (_opts[res] ) {
        obj = Object.assign(_opts[res], ...item[res]);
    } else {
        obj = item[res];
    }
    return obj;
}

function compatibleLifetime (options) {
    let _life = {};
    if (options && options.lifetimes) {
        _life = options.lifetimes;

    } else if (options) {
        _life = options;    
    } 
    return _life;
}

function collectObserver (observerObj, option, ctx) {   
    Object.keys(option).forEach(function (prop) {  
        if (typeof option[prop] !== 'object' || !option[prop]) return false;
        if (option[prop].observer) {
            if (typeof option[prop].observer === 'string') {
                observerObj[prop] = ctx.methods[option[prop].observer];
            } else {
                observerObj[prop] = option[prop].observer;
            }
        }              
    });
    return observerObj;   
}

function collectObservers (observersObj, options, param) {
    let self  = this;
    for (let key in options.observers) {
        let keyArr = key.split(","); 
        let arr = []; 
        keyArr.forEach( its => {  
            its = its.trim();               
            arr.push(self.data[its]);  
                                   
        });
        keyArr.forEach (its => {
            its = its.trim(); 
            observersObj[its] = Object.create(null);
            observersObj[its].fn = options.observers[key]; 
            observersObj[its].arr = arr;
        });   
    }
    observersHandle(observersObj, param, self);
}

function processObservers (observersObj, options, param) { 
    if (options.observers) {  
        collectObservers.call(this, observersObj, options, param);
    } 
}

function processInit () {
    getUrl();
    this._currentEvent = {};
}

function processTriggerEvent () {
    this.triggerEvent = function (event, data = {}, opts = {}) {
        let e = this._currentEvent;
        let eventType = (event[0].toLowerCase() + event.substring(1));
        event = 'on' + event[0].toUpperCase() + event.substring(1);
        e.type = eventType;
        e = processDataSet(e, this.props);
        if (typeof this.props[event] === 'function') {
            if (e) {
                e.detail = e.detail || {};
                if (Array.isArray(data)) {
                    e.detail = data;
                } else {
                    e.detail = {
                        ...e.detail,
                        ...data
                    };
                }
            }
            this.props[event](e, data, opts);
        }
    };
}


function observerHandle (observerObj, args, that ) {
    Object.keys(observerObj).forEach(function (obs) {
        
        if (args[0][obs] !== that.props[obs] && typeof observerObj[obs] === 'function') { 
            observerObj[obs].call(that, that.props[obs], args[0][obs]);
        }
    });
}

function observersHandle (observersObj, args, that) {
    Object.keys(observersObj).forEach(function (obs) {
        if (typeof observersObj[obs].fn === 'function' && args[1][obs] !== that.data[obs] ) {
            observersObj[obs].fn.call(that, ...observersObj[obs].arr);
        }
    });
}

function processIntersectionObserver (context) {
    context.createIntersectionObserver = function (...p) {
        return my.createIntersectionObserver(...p);
    };
}

/**
 * 
 * @param {*} behavior 
 * @param {*} _opts 
 * @param {*} mixins 
 */

module.exports = {
    processTransformationComponent (_opts, options) {
        let fnApp = fnAppClass();
        options.properties = options.properties || {};
        
        let behaviors = options.behaviors || [];
        let mixins = options.mixins || [];
        delete options.behaviors;
        delete options.mixins;
        let retMixins = {};
        
        processBehavior(retMixins, behaviors);
        processBehavior(retMixins, mixins); 
        mergeOptions(retMixins, options);
        
        Object.keys(options)
            .forEach(function (key) {
                _opts[key] = options[key];
            });
        _opts.observerObj = {};  
        _opts.observersObj = {}; 

        handleProps(_opts);
        handleExternalClasses(_opts);


        let _life = compatibleLifetime(options); 
        if (options.properties) {
            collectObserver(_opts.observerObj, options.properties, options);
        }

        if (_opts.methods) {
            processMethods(_opts);
        }
        let didMount = function () {
            _life.error && warnLife(`There is no error life cycle`, "error");
            _life.move && warnLife(`There is no moved life cycle`, "moved");
            _life.pageLifetimes && warnLife(`There is no page life cycle where the component resides,including(show,hide,resize)`, "pageLifetimes");
            this.props.genericSelectable && warnLife(`generic:selectable is Unsupported`, "generic"); 
            if (typeof this.triggerEvent !== 'function') {
                processTriggerEvent.call(this);
            }

            // process relations
            let relationAst = this.$node.getRootNode().mountedHandles;
            relationAst.push(()=>{
                handleRelations.call(this);
            });
        };      
        fnApp.add('onInit', function () {
            this.getRelationNodes = function (...p) {
                console.warn('GetRelationNodes is not ready.', p);
            };
            
            createNode(this, (ast) => {
                ast.createArray.push(this.$id);
            });
            if (this.props.id) {
                this.$node.addComponentNodeId(this.props.id, this);
            }
            processIntersectionObserver(this);
            if (this.props.className) {
                this.$node.addComponentNode(this.props.className, this);
            }

            this.selectComponent = function (...p) {
                return this.$node.selectComponent(...p);
            }; 
            this.selectAllComponents = function (...p) {
                return this.$node.selectComponents(...p);
            };

            this.onPageReady = function (p) {
                _opts.onPageReady && _opts.onPageReady.call(this, p);
            };
        });

        fnApp.add('deriveDataFromProps', function () {
        });

        fnApp.add('didMount', function () {
            createNode(this, (ast) => {
                ast.destoryArray.push(this.$id);
            });
        });
        
        fnApp.add('didMount', didMount);
        fnApp.add('onInit', options.created);
        fnApp.insert('onInit', function () {
            this.properties = {
                ..._opts.properties
            };
            
            processInit.call(this, _opts, options, _life, fnApp);
            updateData.call(this);
        });
        fnApp.bind('onInit', _opts);
        fnApp.add('didMount', _opts.attached);
        fnApp.add('didMount', _opts.ready);
        

        let didUpdate = function (...param) { 
            updateData.call(this);

            processObservers.call(this, _opts.observersObj, options, param);
            observerHandle(_opts.observerObj, param, this);
        };
        fnApp.add('didUpdate', didUpdate);
        fnApp.add('didUpdate', function () {
            handleAfterInit.call(this);        
        });

        fnApp.bind('deriveDataFromProps', _opts);
        fnApp.bind('didUpdate', _opts); 
        fnApp.bind('didMount', _opts);
        fnApp.add('didUnmount', options.detached);
        fnApp.add('didUnmount', function () {
            if (this.$node) {
                this.$node.parent.removeChild(this.$node);
            }
        });
        fnApp.bind("didUnmount", options.didUnmount);
    }
};

function processDataSet (e, props = {}) {
    if (e.timeStamp === undefined) {
        e = {
            ...e,
            target: {
                dataset: {}
            },
            currentTarget: {
                dataset: {}
            }
        };
    }
    Object.keys(props)
        .forEach(function (prop) {
            if (prop.match(/^data-/)) {
                let originProp = prop;
                prop = prop.replace(/[A-Z]/g, function ($) {
                    return $.toLowerCase();
                });


                prop = prop.split('-');
                prop.shift();
                prop = prop.join('');
                e.target.dataset[prop] = props[originProp];
                e.currentTarget.dataset[prop] = props[originProp];
            }
        });
    return e;
}


function handleProps (opts = {}) {
    opts.props = opts.props || {};

    if (opts.relations) {
        opts.props.theRelations = opts.relations;
    }
    if (!opts.properties) return false;
    Object.keys(opts.properties)
        .forEach(function (prop) {
            let val = opts.properties[prop];
            if (!val) {
                opts.props[prop] = val;
                return false;
            }

            if (typeof val === 'function') {
                let obj = {
                    [Boolean]: false,
                    [String]: '',
                    [Array]: [],
                    [Object]: {}
                };
                opts.props[prop] = obj[val];
                return false;
            }

            if (val.hasOwnProperty('value')) {
                opts.props[prop] = val.value;
            } else if (val.type !== 'observer') {
                let info = {
                    [String]: '',
                    [Number]: 0,
                    [Object]: {},
                    [null]: null
                };

                opts.props[prop] = info[val.type];
            }
        });
}

function handleData (otps = {}) {
  
}

function handleExternalClasses (opts = {}) {
    let arr = opts.externalClasses || [];
    let _class = [];
    arr.forEach(function (a) {
        _class.push(_transform(a) || '');
    });

    opts.data = opts.data || {};

    opts.data.__classNames = _class;
    opts.data.__classes = '';

    function _transform (str = '') {
        str = str.replace(/-(\w)/g, function (...$) {
            return $[1].toUpperCase();
        });

        return str || '';
    }
    return opts;
}

function handleAfterInit () {
    let classStr = '';
    this.data.__classNames
        .forEach((key) => {
            classStr += (this.props[key] || '');
        });
    this.setData({
        _classes: classStr
    });
}

/**
 * data => props
 * @param {*} ctx 
 */
/*
function getterData (ctx = {}) {
    ctx.props = ctx.props || {};
    Object.keys(ctx.properties)
        .forEach(function (key) {
            // props name 不能以 $ 开头命名
            if (typeof ctx.props[key] === 'function' || key[0] === '$') return false;
            ctx.data[key] = ctx.data[key] || ctx.props[key];
            Object.defineProperty(ctx.data, key, {
                get () {
                    return ctx.props[key];
                
                }
            });
        });
}*/

/**
 * behavior
 */
function processBehavior (_opts = {}, opts) {
    if (Array.isArray(opts)) {
        opts.forEach(function (item) {
            if (typeof item === 'object') {
                _process(_opts, item);
            }
        });
    } else {
        if (typeof opts === 'object') {
            _process(_opts, opts);
        }
    }
  
    function _process (__opts = {}, opt = {}) {
        if (opt.behaviors) {
            processBehavior(__opts, opt.behaviors);
            delete opt.behaviors;
        }
  
        if (opt.mixins) {
            processBehavior(__opts, opt.mixins);
            delete opt.mixins;
        }
        mergeOptions(opt, __opts);
    }
}
  
function mergeOptions (parent, child) {
    Object.keys(parent)
        .forEach(function (key) {
            let val = parent[key];
            let _val = child[key];
  
            if (Array.isArray(_val)) return false;
            if (child[key] === undefined) child[key] = parent[key];

            if (typeof val === 'object' && typeof _val === 'object') {
                child[key] = Object.assign({}, _val, val);
            } else if (typeof val === 'function' && typeof _val === 'function') {
                child[key] = function (...p) {
                    val.apply(this, p);
                    _val.apply(this, p);
                };
            } 
        });
}