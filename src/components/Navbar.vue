<template>
	<nav>
		<div class="container">
			<div class="main">
				<router-link to="/">dthrcrpz</router-link>
			</div>
			<div class="links">
				<a href="javascript:void(0)" @click="scroll(navItem.target)" v-for="(navItem, key) in navItems" :key="key">{{ navItem.title }}</a>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data () {
			return {
				navItems: [
					{ title: 'About', target: '.about' },
					{ title: 'Projects', target: '.projects' },
				]
			}
		},
		methods: {
			scroll (target) {
				this.$scrollTo(target, {
					offset: -69
				})
			}
		}
	}
</script>