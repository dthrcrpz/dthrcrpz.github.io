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
			<div class="container">
				<div class="left col">
					<div class="photo"></div>
					<h2>Who's this guy?</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div class="right col">
					<h2>Skills, Tools & Technologies</h2>
					<ul>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
						<li>Javascript</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>