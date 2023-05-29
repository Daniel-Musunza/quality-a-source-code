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
                    </div>
                </noscript>
                <section class="flexbox-container table-responsive py-5">
    <div class="col-12 d-flex align-items-center justify-content-center">
        <div class="col-md-5 box-shadow-2 p-0 plain-container">
            <div class="card border-grey border-lighten-3 m-0">
                <div class="card-header border-0">
                    <div class="card-title text-center">
                        <div class="p-1">
                            <a href="/">
                                <img src="@/assets/client/images/logo.png" alt="Quality A"
                                    class="plain-page-logo" width="200px">
                            </a>
                        </div>
                    </div>
                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>Client Sign Up</span>
                    </h6>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="error">
                            {{ this.errorMsg }}
                          </div>
                        <form class="form-horizontal form-simple">
                            <TheLoader v-if="loading"/>
                            <input type="hidden" name="_token">                     
                                   <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="text" name="first_name" class="form-control"
                                            placeholder="First name" required="" v-model.trim="firstName">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="text"  class="form-control" placeholder="Last name"
                                            required="" v-model.trim="lastName">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="email"  class="form-control"
                                            placeholder="Email" required="" v-model.trim="email">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Phone"
                                            required="" v-model.trim="phoneNumber">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 pd-right">
                                    <div class="form-group">
                                        <input type="password" class="form-control"
                                            placeholder="Password" required="" v-model.trim="password">
                                    </div>
                                </div>
                                <div class="col-sm-6 pd-left">
                                    <div class="form-group">
                                        <input type="password"  class="form-control"
                                            placeholder="Confirm Password" required="" v-model.trim="confirmPassword">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 pd-left">
                                    <div class="form-group">
                                        <label for="avatar">Profile picture</label>
                                        <input type="file" name="avatar" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <p class="float-sm-right text-center m-0">
                                    Already have an existing account?
                                    <router-link class="blue-text" to="/client-log-in">
                                        login
                                    </router-link>
                                </p>
                            </div>
                            <button @click.prevent="register()" type="submit" class="btn blue-bg btn-lg btn-block">
                                Sign Up
                            </button>
                        </form>
                        <input type="file" style="display:none;">
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
import { getFirestore } from "firebase/firestore";
import {doc, setDoc} from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export default {
  name: "clientRegister",
  components: {
    TheLoader
  },
    data() {
        return {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          errorMsg: "",
          error: null,
          loading: null
        };
    },
    methods: {
      async register(err) {
        this.loading= true;
        if (
          this.email !== ""&&
          this.password !== ""&&
          this.confirmPassword !== ""&&
          this.firstName !== ""&&
          this.lastName !== "" &&
          this.phoneNumber !== ""
        ) {
            if (this.password == this.confirmPassword){
        
              
                const createUser = await createUserWithEmailAndPassword(getAuth(), this.email, this.password);
                const result = await createUser;
                const db = getFirestore();
                const dataBase = doc(db, "users", result.user.uid);
                await setDoc(dataBase, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    id: dataBase.id
                 });
                const clientdataBase = doc(db, "clients", result.user.uid);
                await setDoc(clientdataBase, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    id: dataBase.id,
                 });
                this.$router.push('/client-dashboard');
                this.loading = false;
                return;
         
        }
        this.error = true;
        this.errorMsg = "password doesn't match";
        this.loading = false;
        return;
        }
        this.error =true;
        this.errorMsg = "Please fill out all the fields!";
        this.loading = false;
        return;
      }
    },
};
</script>

<style scoped>
#send-btn{
    background-color:#1c68c4;
}
</style>