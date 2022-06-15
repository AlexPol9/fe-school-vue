<template>
	<!-- <div class="dropdown-wrapper" v-deprecated="'sss'"> -->
	<div class="dropdown-wrapper" >
		<div class="dropdown-button" :class="{'-active': isActive}" @click="toggle">
			{{ selectedText }}
		</div>
		<div class="dropdown-menu" v-if="isActive">
			<div v-for="item in items" :key="item.id" @click="onSelect(item.id)"> 
				{{item.name}} - {{isSelected(item.id)}}
			</div>
		</div>
	</div>
</template>

<script>
import deprecated from '../common/directives/deprecated'

export default {
	directives: {
		deprecated,
	},
	inheritAttrs: false,
	data() {
		return {
			isActive: false,
		}
	},
	props: {
		value: String,
		items: {
			type: Array,
			default: () => []
		}
	},
	
	computed: {
		href() {
			return `#dropdown-icon`
		},
		selectedItem() {
			return _.find(this.items, x => x.id === this.value)
		},
		selectedText() {
			return this.selectedItem ? this.selectedItem.name : 'not selected'
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
		onSelect(id) {
			// const index = this.items.
			this.$emit('input', id)
		},
		isSelected(id) {
			return this.value === id
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
			z-index: 1;

			&-item {
				border-bottom: 1px solid black;
				background: white;
			}
		}
	}

</style>
