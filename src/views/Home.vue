<template>
	<div class="page-home">
		<section class="intro">
			<div class="container">
				<div class="photo banner-intro"></div>
				<div class="texts">
					<h1>
						<span class="banner-intro">Hi! </span>
						<span class="banner-intro">I'm </span>
						<span class="name banner-intro">Deither Corpuz.</span>
						<br>
						<span class="banner-intro">I'm a Full Stack Web Developer.</span>
					</h1>
					<button @click="scroll('.about')" class="learn-more banner-intro">Learn More <span class="arrow">→</span></button>
				</div>
			</div>
			<vue-particles
				class="vp"
				color="#396775"
				:particleOpacity="0.5"
				linesColor="#396775"
				:particlesNumber="20"
				shapeType="circle"
				:particleSize="5"
				hoverMode="grab"
				:linesWidth="2"
			>
			</vue-particles>
		</section>

		<section class="about">
			<h1 class="section-title">About Me</h1>
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
						<li class="stt">HTML</li>
						<li class="stt">Javascript</li>
						<li class="stt">CSS</li>
						<li class="stt">Vue</li>
						<li class="stt">Nuxt</li>
						<li class="stt">PHP</li>
						<li class="stt">Laravel</li>
						<li class="stt">MySQL</li>
						<li class="stt">Git</li>
						<li class="stt">SASS/LESS/Stylus</li>
						<li class="stt">Linux</li>
						<li class="stt">JSON</li>
						<li class="stt">RESTful API's</li>
						<li class="stt">AWS</li>
						<li class="stt">npm</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="projects">
			<div class="container">
				<h1 class="section-title">Projects</h1>
				<div class="boxes-container">
					<div class="box" v-for="(project, key) in projects" :key="key">
						<div class="real-box" :style="`background-image: url('/images/${project.imageFolderName}/1.png')`">
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
		</section>

		<section class="contact">
			<div class="container">
				<h1 class="section-title">Contact</h1>
				<h2 class="subtitle">Have a question or wanna work together?</h2>
				<form @submit.prevent="submitInquiry()" id="contact-form">
					<div class="form-group">
						<input type="text" name="name" placeholder="Name" v-validate="'required'">
						<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp"><span class="validation-errors" v-if="errors.has('name')">{{ errors.first('name') }}</span></transition>
					</div>
					<div class="form-group">
						<input type="text" name="email" placeholder="Email Address" v-validate="'required|email'">
						<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp"><span class="validation-errors" v-if="errors.has('email')">{{ errors.first('email') }}</span></transition>
					</div>
					<div class="form-group">
						<textarea name="message" rows="6" placeholder="Message" v-validate="'required'"></textarea>
						<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp"><span class="validation-errors with-textarea" v-if="errors.has('message')">{{ errors.first('message') }}</span></transition>
					</div>
					<div class="button-container">
						<button>Submit <span>»</span></button>
					</div>
				</form>
			</div>
		</section>

		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        	<form-sent v-if="$store.state.showModal">
        		<h2>Thanks!</h2>
				<p>I appreciate that you’ve taken the time to contact me. <br> I'll get back to you as soon as I can.</p>
				<button @click="$store.state.showModal = false">Yeah, sure!</button>
	        </form-sent>
        </transition>

        <!-- viewer -->
		<div class="images-viewer" v-viewer='vViewOptions'>
            <img :src="`/images/${projects[projectToView].imageFolderName}/${n}.png`" style="display: none" v-for="(n, key) in 4" :key="key">
        </div>
		<!-- end -->
	</div>
</template>

<script>
	import FormSent from '../components/FormSent'

	export default {
		components: { FormSent },
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
						techs: 'Vue, Laravel',
						imageFolderName: 'lbc-online-booking',
						link: 'https://online-booking.lbcexpress.com'
					},
					{
						title: 'Westin Manila Residences',
						techs: 'Vue, Nuxt, Laravel',
						imageFolderName: 'westin-manila-residences',
						link: 'http://westinmanilaresidences.com/'
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
					{
						title: 'Asiakredit',
						techs: 'Laravel',
						imageFolderName: 'asiakredit',
						link: 'https://asiakredit.com/'
					},
					{
						title: 'RCBC Bankard',
						techs: 'CodeIgniter (frontend only)',
						imageFolderName: 'rcbcbankard',
						link: 'http://rcbcbankard.com'
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
			submitInquiry () {
				this.$validator.validateAll().then(res => {
					if (res) {
						let form = document.querySelector('#contact-form')
						let formData = new FormData(form)
						formData.append('service_id', 'gmail')
						formData.append('template_id', 'dthrcrpz_contact_me')
						formData.append('user_id', 'user_zMraROdatRq8hQGUnntEk')

						this.$store.state.isLoading = true
						this.axios.post('https://api.emailjs.com/api/v1.0/email/send-form', formData).then(res => {
							console.log(res.data)
							setTimeout(() => {
								this.$store.state.isLoading = false
								form.reset()
								this.$store.state.showModal = true
							}, 1000)
						}).catch(err => {
							console.log(err)
							this.$store.state.isLoading = false
						})
					}
				})
			},
			viewProject (index) {
				this.projectToView = index
				setTimeout(() => {
					let viewer = this.$el.querySelector('.images-viewer').$viewer
	                viewer.show()
				}, 100)
			},
			scroll (target) {
				this.$scrollTo(target, {
					offset: -67
				})
			},
			animate () {
				// wew
                let elementNames = [
                	'.banner-intro',
                	'.about .section-title',
                	'.about .left',
                	'.about .right',
                	'.about .right ul li',
                	'.projects .section-title',
                	'.projects .box',
                ]

                elementNames.forEach((elementName, index) => {
                    let elements = document.querySelectorAll(elementName)

                    if (elements) {
                        if (elements.length > 1) {
                            elements.forEach((el, index) => {
                                let bounding = el.getBoundingClientRect()
                                if (bounding.bottom > 0 &&
                                    bounding.right > 0 &&
                                    bounding.left < (window.innerWidth || document.documentElement.clientWidth) &&
                                    bounding.top < (window.innerHeight || document.documentElement.clientHeight)) {

                                	let delay = 350
                                	if (el.classList.contains('banner-intro')) {
                                		delay = 400
                                	}
                                	if (el.classList.contains('stt')) {
                                		delay = 100
                                	}

                                    setTimeout(() => {
                                        el.classList.add('ov')
                                    }, delay * index)
                                }
                            })
                        } else {
                            elements.forEach((el, index) => {
                                let bounding = el.getBoundingClientRect()
                                if (bounding.bottom > 0 &&
                                    bounding.right > 0 &&
                                    bounding.left < (window.innerWidth || document.documentElement.clientWidth) &&
                                    bounding.top < (window.innerHeight || document.documentElement.clientHeight) - 300) {
                                    el.classList.add('ov')
                                }
                            })
                        }
                    }
                })
            }
		},
		mounted () {
			setTimeout(() => {
				this.animate()
			}, 500)
		},
		beforeMount () {
            window.addEventListener('scroll', this.animate)
        }
	}
</script>