<template>
 <div class="wrapper">
    <header class="header">

        <div class="inner-col">

            <div class="mobile-logo d-md-none">
               
            </div>

            <div class="btn-menu btn-menu--left">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>


        <div class="inner-row align-right">



            <div class="d-none d-md-block">
                <div class="user">
                    <p class="user__name">
                        {{this.email}}
                    </p>
                    <p style="padding-left:20px;cursor:pointer" class="user__name">
                        <a @click="logout()">Logout</a>
                    </p>
                </div>
            </div>

            <div class="btn-menu btn-menu--right">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>

    </header>

    <div class="content">
        <aside class="sidebar">
            <div class="sidebar__close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="16" viewBox="0 0 15 16">
                    <defs>
                        <path id="hy9fa" d="M294.49 17.58L307.92 31l-1.41 1.41L293.08 19z" />
                        <path id="hy9fb" d="M293.08 31.01l13.43-13.43 1.41 1.41-13.43 13.43z" />
                    </defs>
                    <g>
                        <g transform="translate(-293 -17)">
                            <use fill="#fff" xlink:href="#hy9fa" />
                        </g>
                        <g transform="translate(-293 -17)">
                            <use fill="#fff" xlink:href="#hy9fb" />
                        </g>
                    </g>
                </svg>
            </div>

            <a class="logo">
                <img style="height:64px" src="logo.svg" alt="">
                <span class="logo__text"  style="margin-left: 10px"></span>
            </a>

            <ul class="menu">
                <li class="menu__item">
                    <router-link  class="menu__link" to="/dashboard/buy" default>
                        <span class="menu__link-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13.5px"
                                height="18px" viewBox="0 0 13.5 18" style="enable-background:new 0 0 13.5 18;" xml:space="preserve">
                                <path d="M10.5,4.5V3.75C10.5,1.679,8.821,0,6.75,0S3,1.679,3,3.75V4.5H0v11.25C0,16.993,1.007,18,2.25,18h9
                                     c1.243,0,2.25-1.007,2.25-2.25V4.5H10.5z M4.5,3.75c0-1.243,1.007-2.25,2.25-2.25S9,2.507,9,3.75V4.5H4.5V3.75z M12,15.75
                                     c0,0.414-0.336,0.75-0.75,0.75h-9c-0.414,0-0.75-0.336-0.75-0.75V6H12V15.75z" />
                            </svg>
                        </span>
                        <span class="menu__link-text">
                            Buy Tokens
                        </span>
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__link" to="/dashboard/support">
                        <span class="menu__link-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.503px"
                                height="15.001px" viewBox="0 0 16.503 15.001" style="enable-background:new 0 0 16.503 15.001;"
                                xml:space="preserve">
                                <path d="M14.951,0H1.547C0.693,0,0,0.692,0,1.547v8.764c0,0.854,0.692,1.547,1.547,1.547h2.062v2.191
                                     c0.15,0.644,0.897,1.413,2.119,0.603l3.093-2.794h6.135c0.854,0,1.547-0.692,1.547-1.547V1.547C16.503,0.693,15.811,0,14.956,0
                                     C14.955,0,14.953,0,14.951,0z M15.467,9.795c0,0.569-0.462,1.031-1.031,1.031H8.507l-3.418,3.047
                                     c-0.577,0.717-0.423-1.165-0.423-1.98l0,0v-1.067H2.088c-0.569,0-1.031-0.462-1.031-1.031V2.062c0-0.569,0.462-1.031,1.031-1.031
                                     h12.373c0.569,0,1.031,0.462,1.031,1.031v7.733H15.467z" />
                            </svg>
                        </span>
                        <span class="menu__link-text">
                            Support
                        </span>
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__link" to="/dashboard/account">
                        <span class="menu__link-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px"
                                height="18px" viewBox="0 0 18 18" style="enable-background:new 0 0 18 18;" xml:space="preserve">
                                <path d="M9,6C7.343,6,6,7.343,6,9c0,1.657,1.343,3,3,3c1.657,0,3-1.343,3-3C12,7.343,10.657,6,9,6z M9,10.5
                                             c-0.828,0-1.5-0.672-1.5-1.5S8.172,7.5,9,7.5s1.5,0.672,1.5,1.5S9.828,10.5,9,10.5z M15.75,6.75h-1.32l0.93-0.93
                                             c0.847-0.909,0.797-2.333-0.112-3.18c-0.864-0.805-2.203-0.805-3.068,0l-0.93,0.93V2.25C11.25,1.007,10.243,0,9,0
                                             C7.757,0,6.75,1.007,6.75,2.25v1.32L5.82,2.625C4.911,1.778,3.487,1.828,2.64,2.737c-0.805,0.864-0.805,2.203,0,3.068l0.93,0.93
                                             H2.25C1.007,6.735,0,7.742,0,8.985c0,1.243,1.007,2.25,2.25,2.25h1.32L2.625,12.18c-0.847,0.909-0.797,2.333,0.112,3.18
                                             c0.864,0.805,2.203,0.805,3.068,0l0.93-0.93v1.32c0,1.243,1.007,2.25,2.25,2.25c1.243,0,2.25-1.007,2.25-2.25v-1.32l0.93,0.93
                                             c0.909,0.847,2.333,0.797,3.18-0.112c0.805-0.864,0.805-2.203,0-3.068l-0.93-0.93h1.32c1.243,0.008,2.257-0.992,2.265-2.235V9
                                             C18,7.757,16.993,6.75,15.75,6.75z M15.75,9.75h-1.56c-0.125,0.868-0.465,1.69-0.99,2.393l1.102,1.102
                                             c0.269,0.315,0.233,0.788-0.082,1.057c-0.281,0.241-0.695,0.241-0.976,0L12.142,13.2c-0.702,0.525-1.525,0.865-2.393,0.99v1.56
                                             c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75v-1.56c-0.868-0.125-1.69-0.465-2.393-0.99l-1.102,1.102
                                             c-0.315,0.269-0.788,0.233-1.057-0.082c-0.241-0.281-0.241-0.695,0-0.976l1.102-1.102c-0.525-0.702-0.865-1.525-0.99-2.393h-1.56
                                             c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h1.56c0.125-0.868,0.465-1.69,0.99-2.393L3.697,4.754
                                             C3.428,4.439,3.464,3.966,3.779,3.697c0.281-0.241,0.695-0.241,0.976,0l1.102,1.102c0.702-0.525,1.525-0.865,2.393-0.99v-1.56
                                             c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v1.56c0.868,0.125,1.69,0.465,2.393,0.99l1.102-1.102
                                             c0.315-0.269,0.788-0.233,1.057,0.082c0.241,0.281,0.241,0.695,0,0.976L13.2,5.857c0.525,0.702,0.865,1.525,0.99,2.393h1.56
                                             c0.414,0,0.75,0.336,0.75,0.75S16.164,9.75,15.75,9.75z" />
                            </svg>
                        </span>
                        <span class="menu__link-text">
                            Account
                        </span>
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link class="menu__link" to="/dashboard">
                        <span class="menu__link-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px"
                                height="16px" viewBox="-12 15 18 16" style="enable-background:new -12 15 18 16;" xml:space="preserve">
                                <path d="M6,19.557L-3,15l-9,4.557l9,4.318L6,19.557z M-3,16.681l5.608,2.84L-3,22.211l-5.608-2.69
                                             L-3,16.681z M2.561,26.668L-3,29.336l-5.561-2.668h-3.412L-12,26.682L-3,31l9-4.318l-0.027-0.014H2.561z M2.561,23.106L-3,25.774
                                             l-5.561-2.668h-3.412L-12,23.12l9,4.318l9-4.318l-0.027-0.014C5.973,23.106,2.561,23.106,2.561,23.106z"
                                />
                            </svg>
                        </span>
                        <span class="menu__link-text" style="opacity:0.25; cursor:not-allowed">
                            Verification
                        </span>
                    </router-link>
                </li>
            </ul>

            <div class="d-md-none">
                <div class="user">
                    <p class="user__name">
                        Alex Bolden
                    </p>
                    <p class="user__name">
                        Logout
                    </p>
                </div>
            </div>

            <div class="copyright">
                © 2018 ACO Coins
            </div>

        </aside>

        <main class="main-content">
           <router-view/>
        </main>
    </div>
   
</div>
</template>
  
<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Buy from "../components/Buy.vue";
import Support from "../components/Support.vue";
import Account from "../components/Account.vue";
import jQuery from "jquery";
window.jQuery = window.$ = jQuery;
export default {
  name: "dashboard",
  components: {
    Buy,
    Support,
    Account
  },
  mounted() {
    console.log('mounted : ', )
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=1440');
     if(this.$store.state.auth.jwt=='') {
        this.$router.replace({ path: "/" });
    }
  },
  data() {
    return {
      navpo: 0,
      email : this.$store.state.userdata.email
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT", {
        router: this.$router
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/style.css";
</style>
