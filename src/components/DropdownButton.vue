<template>
	<!-- <div class="dropdown-wrapper" v-deprecated="'sss'"> -->
	<div class="dropdown-wrapper"  v-click-outside="close">
		<div class="dropdown-button" :class="{'-active': isActive}" @click="toggle">
			<svg width="10" height="12">
				<use :xlink:href="href" />
			</svg>
		</div>
		<div class="dropdown-menu" v-if="isActive">
			<slot :isActive="isActive"></slot>
			<!-- <slot name="drop-item"></slot> -->
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
		
	},
	
	computed: {
		href() {
			return `#dropdown-icon`
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
