export const Model = {
    data() {
        return {
            dd: 111
        }
    },
    props: {
        value: String,
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                //console.log(val)
                this.$emit('input', val)
            }
        }
    },
    created() {
        console.log('comp1')
    },
    beforeRouteLeave(to, from, next) {
		const aa = window.confirm('Leave page?')
		if(aa) {
			next()
		} else {
			next(false)
		}
		
		// next(vm => {
		// 	console.log(vm.color)
		// })
	}
}