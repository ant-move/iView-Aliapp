Component({
    externalClasses: ['i-class'],
    properties: {
        current: {
            type: Object,
            value: {},
            observer: 'changeCurrent'
        },
        position: {
            type: String,
            value: 'left'
        },
        items: {
            type: Array,
            value: [],
            observer: 'updateSources'
        }
    },
    data: {
        dataSources: []
    },
    methods: {
        changeCurrent() {
            this.updateSources(this.data.items)
        },
        updateSources (arr) {
            if (!Array.isArray(arr)) return false;
            arr = arr.map((a) => {
                if (a.name === this.data.current.value) {
                    a.checked = this.data.current.checked;
                } else {
                    a.checked = false
                }
                return a;
            })
            this.setData({
                dataSources: arr
            })
        },
        handleChange (e) {
            let _d = {
                value: e.detail.value,
                checked: e.detail.current
            }
            this.triggerEvent('change', _d);
        }
    }
    ,
    ready () {
       this.updateSources(this.data.items);
    }
});
