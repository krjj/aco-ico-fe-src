<template>
  <main role="main">
			<!-- start section -->
			<section class="section section--no-pt section--no-pb section--light-bg">
				<div class="grid grid--container">
					<div class="authorization authorization--login">
						<a class="site-logo">
							<img class="img-responsive" width="175" height="42" src="../assets/logo.png" alt="demo" style="display:none">
						</a>

						<form class="authorization__form" v-on:submit.prevent>
							<h3 class="__title">Sign In</h3>

							<div class="input-wrp">
								<input v-model="email" class="textfield" type="text" value="" placeholder="Email" />
							</div>

							<div class="input-wrp">
								<i class="textfield-ico fontello-eye"></i>
								<input v-model="password" type="password" class="textfield" value="" placeholder="Password" />
							</div>

							<p>
								<a href="" style="display:none">I forgot my password</a>

								<button class="custom-btn custom-btn--medium custom-btn--style-2 wide" role="button" @click="login()">Submit</button>
							</p>

						<p class="text--center"><router-link to="/signup">Sign Up</router-link> if you don’t have an account</p>

						</form>
					</div>
				</div>
			</section>
			<!-- end section -->
		</main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
	data() {
		return { 
			email : '',
			password : ''
		}
	},
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {email : this.email,password : this.password, noty : this.$noty, router : this.$router});
    }
  }
};
</script>

<style scoped>
@import '../assets/css/style.css';
</style>