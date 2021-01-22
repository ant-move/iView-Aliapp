Component({
    externalClasses: ['i-class'],

    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },

    properties: {
        ikey: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },

    data: {
        current: false,
        currentColor: '',
        scroll: false
    },

    methods: {
        changeCurrent (current) {
            this.setData({ current });
        },
        changeCurrentColor (currentColor) {
            this.setData({ currentColor });
        },
        changeScroll (scroll, _style) {
            if (_style) {
                this.setData({ scroll, style: _style });
            } else {
                this.setData({ scroll });
            }
        },
        handleClickItem () {
            const parent = this.getRelationNodes('../tabs/index')[0];
            parent.emitEvent(this.data.ikey);
        }
    }
});
