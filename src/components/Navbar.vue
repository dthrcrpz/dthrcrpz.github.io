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
		<div class="btt" v-scroll-to="'nav'"></div>
	</nav>
</template>

<script>
	export default {
		data () {
			return {
				navItems: [
					{ title: 'About', target: '.about' },
					{ title: 'Projects', target: '.projects' },
					{ title: 'Contact', target: '.contact' },
				]
			}
		},
		methods: {
			scroll (target) {
				this.$scrollTo(target, {
					offset: -69
				})
			},
			handleScroll () {
				let btt = document.querySelector('.btt')
				let height = window.pageYOffset | document.body.scrollTop
                if (height >= 200) {
                	btt.classList.add('shown')
                } else {
                    btt.classList.remove('shown')
                }
			},
		},
		beforeMount () {
            window.addEventListener('scroll', this.handleScroll)
        },
	}
</script>