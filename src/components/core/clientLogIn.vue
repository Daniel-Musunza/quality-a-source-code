<template>
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body">
                
                <noscript>
                    <div class="alert alert-icon-left alert-danger alert-dismissible mb-2" id="no-script" role="alert">
                        <span class="alert-icon"><i class="fa fa-info"></i></span>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        For full functionality of this site it is necessary to enable JavaScript.
                        Here are the <a href="">
                            instructions how to enable JavaScript in your web browser</a>.
                    </div>
                </noscript>
                <section class="flexbox-container">
    <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="col-md-5 box-shadow-2 p-0 plain-container">
            <div class="card border-grey border-lighten-3 m-0">
                <div class="card-header border-0">
                    <div class="card-title text-center">
                        <div class="p-1">
                            <a href="/">
                                <img src="@/assets/client/images/logo.png" alt="QualityA"
                                    class="plain-page-logo" width="200px">
                            </a>
                        </div>
                    </div>
                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>Client Login</span>
                    </h6>
                </div>
                <div class="card-content">
                    <div class="card-body login">
                        <div class="alert alert-danger" v-if="error">
                            {{ this.errorMsg }}
                          </div>
                        <form class="form-horizontal form-simple" method="POST" action="">
                            <TheLoader v-if="loading"/>
                            <input type="hidden" name="_token" >                          
                              <fieldset class="form-group position-relative has-icon-left">
                                <input type="text"
                                    class="form-control form-control-lg input-lg "
                                   v-model.trim="email"
                                    placeholder="Enter Your Email" required>
                                <div class="form-control-position">
                                    <i class="ft-user"></i>
                                </div>
                                                            </fieldset>
                            <fieldset class="form-group position-relative has-icon-left">
                                <input type="password"
                                    class="form-control form-control-lg input-lg "
                                    placeholder="Enter Your Account Password" required
                                   v-model.trim="password">
                                <div class="form-control-position">
                                    <i class="fa fa-lock"></i>
                                </div>
                                                            </fieldset>
                            <div class="form-group row">
                                <div class="col-md-6 col-12 text-center text-md-left">
                                    <fieldset>
                                        <input type="checkbox" class="chk-remember"
                                            >
                                        <label for="remember-me"> Remember Me</label>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 col-12 text-center text-md-right">
                                    <router-link class="blue-text" to="/forgot-password" >Forgot
                                        Password?</router-link>
                                </div>
                            </div>
                            <button type="submit"   class="btn blue-bg btn-lg btn-block" @click.prevent="signIn()">
                              Log In
                            </button>
                        </form>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="">
                        <p class="float-sm-right text-center m-0">
                            New Client?
                            <router-link  to="/client-register" class="card-link">
                                Sign Up
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
        </div>
    </div>
</template>

<script>
 import TheLoader from "@/components/TheLoader";
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default {
    name: "clientLogIn",
      data() {
          return {
              email: '',
              password: '',
              errorMsg: '',
              error: null,
              loading: null
          };
      },
      components: {
        TheLoader
      },
      methods: {
       async signIn () {
          this.loading= true;
          const auth = getAuth();
    
          try {
           await signInWithEmailAndPassword(auth, this.email, this.password);
            this.$router.push('/client-dashboard');
            this.error = false;
            this.errorMsg = "";
            this.loading = false;
        } catch(err) {
            this.loading = false;
            this.error = true;
            this.errorMsg = err.message;
          }
        }
      },
  };
</script>

<style scoped>

#send-btn{
    background-color:#1c68c4;
}

</style>