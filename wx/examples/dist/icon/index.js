/*
 * @Author: your name
 * @Date: 2021-01-08 15:23:24
 * @LastEditTime: 2021-01-11 19:17:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Iview-Aliapp/wx/examples/dist/icon/index.js
 */
Component({
    externalClasses: ['i-class'],

    properties: {
        type: {
            type: String,
            value: ''
        },
        custom: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 14
        },
        color: {
            type: String,
            value: ''
        }
    },
    methods: {
        iconHandler() {
            this.triggerEvent('click')
        }
    }
});
