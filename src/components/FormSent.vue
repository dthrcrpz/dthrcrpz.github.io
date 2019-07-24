<template>
	<div class="modal-template">
		<div class="form-sent modal" v-click-outside="closeMe">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeMe () {
				setTimeout(() => {
					this.$store.state.showModal = false
				}, 100)
			}
		},
	}
</script>