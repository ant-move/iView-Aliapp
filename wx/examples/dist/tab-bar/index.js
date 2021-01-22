/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-15 17:17:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/tab-bar/index.js
 */
Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar-item/index': {
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
        fixed: {
            type: Boolean,
            value: false
        }
    },

    data: {
        list: []
    },

    methods: {
        changeCurrent (val = this.data.current) {
            let items = this.getRelationNodes('../tab-bar-item/index');
            const len = items.length;
            if (len > 0) {
                const list = [];
                items.forEach(item => {
                    item.changeCurrent(item.data.ikey === val);
                    item.changeCurrentColor(this.data.color);
                    list.push({
                        ikey: item.data.ikey
                    });
                });
                this.setData({
                    list: list
                });
            }
        },
        emitEvent (key) {
            this.triggerEvent('change', { key });
        },
        handleClickItem (e) {
            const key = e.currentTarget.dataset.ikey;
            this.emitEvent(key);
        }
    }
});
