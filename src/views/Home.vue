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
					<a href="javascript:void">Learn More <span class="arrow">→</span></a>
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
					<div class="box" :style="`background-image: url('https://picsum.photos/id/5${key}/400/400')`" v-for="(project, key) in 8">
						<div class="overlayer"></div>
						<div class="texts">
							<p class="title">Manila Ocean Park</p>
							<p class="tech">Vue, Nuxt, Laravel</p>
						</div>
						<button class="more-details">More Details <span>+</span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				projects: [
					{
						img: '/images/1.jpg',
					}
				]
			}
		}
	}
</script>