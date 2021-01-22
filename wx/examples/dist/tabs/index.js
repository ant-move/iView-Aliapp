/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-18 11:30:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/tabs/index.js
 */
Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab/index': {
            type: 'child',
            linked () {
                this.changeCurrent();
            },
            linkChanged () {
                this.changeCurrent();
            },
            unlinked () {
                this.changeCurrent();
            }
        }
    },

    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        color: {
            type: String,
            value: ''
        },
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        changeCurrent (val = this.data.current) {
            let items = this.getRelationNodes('../tab/index');
            const len = items.length;
            if (len > 0) {
                items.forEach(item => {
                    let _style = ''
                    if (wx.__target__ === 'alipay') {
                        if (this.data.scroll) {
                            _style='display: inline-block;'
                        }
                    }
                    item.changeScroll(this.data.scroll, _style);
                    item.changeCurrent(item.data.ikey === val);
                    item.changeCurrentColor(this.data.color);
                });
            }
        },
        emitEvent (key) {
            this.triggerEvent('change', { ikey: key });
        }
    }
});
