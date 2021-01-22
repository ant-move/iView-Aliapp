Component({
    externalClasses: ['i-class-content', 'i-class-title', 'i-class'],

    relations: {
        '../collapse/index': {
            type: 'parent',
            linked: function (target) {
                const options = {
                    accordion: target.data.accordion
                }
                if (wx.__target__ === 'alipay') {
                    const parent = target || {}
                    this.icollapse = parent.clickfn || function(){}
                }
                if (target.data.name === this.data.name) {
                    options.showContent = 'i-collapse-item-show-content';
                }
                this.setData(options);
            }
        }
    },

    properties: {
        title: String,
        name: String
    },

    data: {
        showContent: '',
        accordion: false
    },

    options: {
        multipleSlots: true
    },

    methods: {
        trigger(e) {
            const data = this.data;
            if (data.accordion) {
                if (wx.__target__ === 'alipay') {
                    const _evnet = {
                        detail:{
                          name: data.name
                        }
                      }
                      this.icollapse(_evnet)
                }
                this.triggerEvent('collapse', {name: data.name}, {composed: true, bubbles: true});
            } else {
                this.setData({
                    showContent: data.showContent ? '' : 'i-collapse-item-show-content'
                });
            }
        },
    }
});

