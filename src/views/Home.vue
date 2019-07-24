<template>
	<div>
		<div class="intro">
			<div class="container">
				<div class="photo"></div>
				<div class="texts">
					<h1>
						Hi! I'm <span>Deither Corpuz</span>.
						<br>
						I'm a Full Stack Web Developer.
					</h1>
					<a href="javascript:void" @click="scroll('.about')">Learn More <span class="arrow">→</span></a>
				</div>
			</div>
			<vue-particles
				class="vp"
				color="#396775"
				:particleOpacity="0.5"
				linesColor="#396775"
				:particlesNumber="60"
				shapeType="circle"
				:particleSize="5"
				hoverMode="grab"
				:linesWidth="2"
			>
			</vue-particles>
		</div>

		<div class="about">
			<h1>About Me</h1>
			<div class="container">
				<div class="left col">
					<div class="egg"></div>
					<h2>Who's this egg?</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div class="right col">
					<h2>Skills, Tools, & Technologies</h2>
					<ul>
						<li>HTML</li>
						<li>Javascript</li>
						<li>CSS</li>
						<li>Vue</li>
						<li>Nuxt</li>
						<li>PHP</li>
						<li>Laravel</li>
						<li>MySQL</li>
						<li>Git</li>
						<li>SASS/LESS/Stylus</li>
						<li>Linux</li>
						<li>JSON</li>
						<li>RESTful API's</li>
						<li>AWS</li>
						<li>npm</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="projects">
			<div class="container">
				<h1>Projects</h1>
				<div class="boxes-container">
					<div class="box" :style="`background-image: url('/images/${project.imageFolderName}/1.png')`" v-for="(project, key) in projects" :key="key">
						<div class="overlayer"></div>
						<div class="texts">
							<p class="title">{{ project.title }}</p>
							<p class="tech">{{ project.techs }}</p>
						</div>
						<div class="buttons">
							<button class="button" @click="viewProject(key)">View Photos <span>+</span></button>
							<a class="button" :href="project.link" target="_blank">Visit Site <span>↗</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        	<project-view v-if="$store.state.showModal">
				<p>We appreciate that you’ve taken the time to write us. We’ll get back to you very soon.</p>
				<button class="green-button" @click="$store.state.showModal = false">Okay</button>
	        </project-view>
        </transition>

        <!-- viewer -->
		<div class="images-viewer" v-viewer='vViewOptions'>
            <img :src="`/images/${projects[projectToView].imageFolderName}/${n}.png`" style="display: none" v-for="(n, key) in 4" :key="key">
        </div>
		<!-- end -->
	</div>
</template>

<script>
	import ProjectView from '../components/ProjectView'

	export default {
		components: { ProjectView },
		data () {
			return {
				projects: [
					{
						title: 'Manila Ocean Park',
						techs: 'Vue, Nuxt, Laravel',
						imageFolderName: 'manila-ocean-park',
						link: 'https://www.manilaoceanpark.com/'
					},
					{
						title: 'LBC Online Booking',
						techs: 'Vue',
						imageFolderName: 'lbc-online-booking',
						link: 'https://online-booking.lbcexpress.com'
					},
					{
						title: 'YGC Rewards Plus',
						techs: 'Vue, Laravel',
						imageFolderName: 'ygc',
						link: 'https://ygcrewardsplus-apply.rcbcbankard.com/'
					},
					{
						title: 'pera247',
						techs: 'Laravel',
						imageFolderName: 'pera247',
						link: 'https://pera247.ph/'
					},
				],
				projectToView: 0,
				vViewOptions: {
                    inline: false,
                    button: true,
                    navbar: false,
                    toolbar: true,
                    tooltip: false,
                    movable: true,
                    zoomable: true,
                    rotatable: false,
                    scalable: true,
                    transition: true,
                    fullscreen: true,
                    keyboard: true,
                    navbar: true,
                    title: ''
                },
			}
		},
		methods: {
			viewProject (index) {
				this.projectToView = index
				setTimeout(() => {
					let viewer = this.$el.querySelector('.images-viewer').$viewer
	                viewer.show()
				}, 100)
			},
			scroll (target) {
				this.$scrollTo(target, {
					offset: -69
				})
			},
		}
	}
</script>