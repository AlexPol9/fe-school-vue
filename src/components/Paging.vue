<template>
	<!-- <div class="dropdown-wrapper" v-deprecated="'sss'"> -->
	<div class="dropdown-wrapper">
		<Button @click="onChange(page - 1)">Назад</Button>

		<Button v-for="item in pages" :key="item" @click="onChange(page)">{{item}}</Button>

		<Button>Иперед</Button>
		{{`Показано pageFrom - lastItem из total`}}
	</div>
</template>

<script>
import deprecated from '../common/directives/deprecated'
// import vClickOutside from 'v-click-outside'

export default {
	directives: {
		deprecated,
		// vClickOutside
	},
	inheritAttrs: false,
	data() {
		return {
			isActive: false,
		}
	},
	props: {
		pageFrom: Number,
		pageSize: Number,
		total: Number

	},
	
	computed: {
		href() {
			return `#dropdown-icon`
		},
		page() {
			this.pageFrom = 10

			return pageFrom / pageSize

		},
		lastItem() {
			return pageFrom + pageSize > total ? total : pageFrom + pageSize
		},
		comp: {
			get() {
				return pageFrom / pageSize
			},
			set(val) {
				this.pageFrom = val
			}
		}
	},
	mounted() {
		console.log(this.$el.getBoundingClientRect());
	},
	methods: {

		toggle() {
			this.isActive = !this.isActive;
		},
		close() {
			this.isActive = false
		},
		onChange(page) {
			this.$emit('change', page)
		}
	},
}
</script>

<style lang="scss" scoped>
	.dropdown {
		&-wrapper {
			position: relative;
		}
		&-button {
			border: 1px solid black;

			&.-active {
				border-color: red;
			}
		}
		&-menu {
			position: absolute;
			right: 0px;
			left: 0px;
			border: 1px solid black;
			background: white;

			&-item {
				border-bottom: 1px solid black;
				background: white;
			}
		}
	}

</style>
