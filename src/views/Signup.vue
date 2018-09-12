<template>
  <div>
    <main role="main">
			<!-- start section -->
			<section class="section section--no-pt section--no-pb section--light-bg">
				<div class="grid grid--container">
					<div class="authorization authorization--registration">
						<!-- this is demo, remove div class row and div's class col -->
						<div class="row">
							<div class="col col--md-auto">
								<div class="text--center">
									<a class="site-logo">
										<img class="img-responsive" width="175" height="42" src="" alt="signup" style="display:none">
									</a>
								</div>

								<form class="authorization__form" v-on:submit.prevent>
									<h3 class="__title">Sign Up</h3>

									<div class="input-wrp">
										<input v-model="firstname" class="textfield" type="text" value="" placeholder="First Name" />
									</div>

									<div class="input-wrp">
										<input v-model="lastname" class="textfield" type="text" value="" placeholder="Last Name" />
									</div>

									<div class="input-wrp">
										<input v-model="email" class="textfield" type="text" value="" placeholder="Email" />
									</div>

									<div class="input-wrp">
										<i class="textfield-ico fontello-eye"></i>
										<input v-model="password" type="password" class="textfield" value="" placeholder="Password" />
									</div>

									<div class="input-wrp">
										<i class="textfield-ico fontello-eye"></i>
										<input v-model="cpassword" class="textfield" type="password" value="" placeholder="Confirm Password" />
									</div>

									<p>
										<label class="checkbox">
											<input v-model="tos" name="p1" type="checkbox" value="ok" />
											<i class="fontello-check"></i><span>I agree with <a href="#">Terms of Services</a></span>
										</label>
										<button style="margin-top:15px" class="custom-btn custom-btn--medium custom-btn--style-2 wide" @click="signup()">Submit</button>
									</p>
									<p class="text--center"><router-link to="/login">Sign In</router-link> if you don’t have an account</p>
								</form>
							</div>

						</div>
					</div>
				</div>
			</section>
			<!-- end section -->
		</main>
  </div>
</template>

<script>
export default {
  name: "signup",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
      tos: false,
      firstname: "",
      lastname: ""
    };
  },
  methods: {
    signup() {
			let flag = false;
			let flag1 = false;
			let flag2  = false;
      if (this.password != "") {
        if (this.password != this.cpassword) {
          this.$noty.error("Password does not match");
          flag = false;
        } else {
          flag = true;
        }
      } else {
        this.$noty.error("Password field cannot be empty");
        flag = false;
      }

      if (this.email != "" && this.firstname != "" && this.lastname != "") {
        flag1 = true;
      } else {
        this.$noty.error("All fields are mandatory");
        flag1 = false;
      }

      if (this.tos == false) {
        this.$noty.error("Accept Terms and Conditions");
        flag2 = false;
      } else {
        flag2 = true;
			}
			
      if (flag == true && flag1 == true && flag2 == true) {
				this.$noty.info("Signing up....");
         this.$store.dispatch("SIGNUP", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
					password: this.password,
					noty : this.$noty
        });
      }
    }
  }
};
</script>

<style scoped>
@import '../assets/css/style.css';
</style>