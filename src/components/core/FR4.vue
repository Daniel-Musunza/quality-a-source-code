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
                                            <img src="client/images/logo.png" alt="Quality A"
                                                class="plain-page-logo" width="200px">
                                        </a>
                                    </div>
                                </div>
                                <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                    <span>Freelancer Account Registration</span>
                                </h6>
                                <h6 class="portfolio">Portfolio</h6>
                                <TheLoader v-if="loading"/>
                                        <div class="row">
                                            <div class="col-sm-12 pd-right">
                                                <div class="form-group">
                                                    <input type="text" name="portfolio" class="form-control"
                                                        placeholder="LINK TO YOUR PORTFOLIO" v-model="portfolio_link">
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 pd-left">
                                                <div class="form-group">
                                                    <label for="avatar">Profile picture</label>
                                                    <input type="file" name="avatar"  ref="orderFile" id="order-file" @change="fileChange" class="form-control">
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
                                        <div class="mb-3">
                                            <router-link class="btn btn-theme btn-circle" to="/fr3" data-text="Previous">
                                                <span>P</span><span>r</span><span>e</span><span>v</span><span>i</span><span>o</span><span>u</span><span>s</span>
                                            </router-link>
                                            <p class="float-sm-right text-center m-0">
                                                Already have an existing account?
                                                <router-link class="blue-text" to="/freelancer-log-in" >
                                                    logIn
                                                </router-link>
                                            </p>
                                        </div>
                                        <button type="submit"  @click.prevent="register()" class="btn blue-bg btn-lg btn-block" id="send-btn">
                                            Register
                                        </button>
                                <input type="file" id="avatar" onchange="{append_avatar(event)}" style="display:none;">
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
import { mapState, mapActions } from 'vuex';
import TheLoader from "@/components/TheLoader";
import { getFirestore, doc, setDoc, } from "firebase/firestore";
import { getStorage ,ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"; 
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export default {
  name: "clientRegister",
  components: {
    TheLoader
  },
    data() {
        return {
            firstName:null,
            lastName: null,
            phoneNumber: null,
            email: null,
            freelancing_field: null,
          niche:null,
          other_roles: [],
          portfolio_link: "",
          password: "",
          confirmPassword: "",
          errorMsg: "",
          error: null,
          loading: null,
          file: null
        };
    },
    methods: {

        fileChange() {
            if (this.$refs.orderFile && this.$refs.orderFile.files.length > 0) {
                this.file = this.$refs.orderFile.files[0];
                const fileName = this.file.name;
                this.$store.commit("orderFileNameChange", fileName);
                this.$store.commit("createOrderFileURL", URL.createObjectURL(this.file));
            }else {
                console.log("no file");
            }
        },
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
                    
                if (this.file) {
                    
                    this.loading = true;
                        const storage = getStorage();
                        const storageRef = ref(
                        storage,
                        `documents/profiles/${this.$store.state.orderFileName}`
                        );
                        const uploadTask = uploadBytesResumable(storageRef, this.file);
                        uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            console.log(snapshot);
                        },
                        (err) => {
                            console.log(err);
                            this.loading = false;
                        },
                        async () => {
                        const downloadURL = await getDownloadURL(storageRef);
                        const db = getFirestore();
                        const dataBase = doc(db, "users", result.user.uid);
                        await setDoc(dataBase, {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            phoneNumber: this.phoneNumber,
                            freelancing_field: this.freelancing_field,
                            niche: this.niche,
                            other_roles: this.other_roles,
                            portfolio_link: this.portfolio_link,
                            profileCoverFile: downloadURL,
                            profileCoverFileName: this.$store.state.orderFileName,
                            id: dataBase.id
                        });
                        const clientdataBase = doc(db, "freelancers", result.user.uid);
                        await setDoc(clientdataBase, {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            phoneNumber: this.phoneNumber,
                            freelancing_field: this.freelancing_field,
                            niche: this.niche,
                            other_roles: this.other_roles,
                            portfolio_link: this.portfolio_link,
                            profileCoverFile: downloadURL,
                            profileCoverFileName: this.$store.state.orderFileName,
                            id: dataBase.id,
                        });
                        this.loading = false;
                        alert("success!! we will review your Details and get back to you.");
                        this.$router.push('/client-dashboard');
                
                    return;
                    }
                );
                }
                else {
                    const db = getFirestore();
                    const dataBase = doc(db, "users", result.user.uid);
                    await setDoc(dataBase, {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        phoneNumber: this.phoneNumber,
                        freelancing_field: this.freelancing_field,
                        niche: this.niche,
                        other_roles: this.other_roles,
                        portfolio_link: this.portfolio_link,
                        id: dataBase.id
                    });
                    const clientdataBase = doc(db, "freelancers", result.user.uid);
                    await setDoc(clientdataBase, {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        phoneNumber: this.phoneNumber,
                        freelancing_field: this.freelancing_field,
                        niche: this.niche,
                        other_roles: this.other_roles,
                        portfolio_link: this.portfolio_link,
                        id: dataBase.id,
                    });
                    this.loading = false;
                    alert("success!! we will review your Details and get back to you.")
                    this.$router.push('/client-dashboard');
                return;
                }
            
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
    computed:{
    ...mapState(['freelancerInfo']),
   
    },
    created() {
        if (this.freelancerInfo[0]) {
            this.firstName = this.freelancerInfo[0].firstName ?? '';
            this.lastName = this.freelancerInfo[0].lastName ?? '';
            this.phoneNumber = this.freelancerInfo[0].phoneNumber ?? '';
            this.email = this.freelancerInfo[0].email ?? '';
            this.freelancing_field = this.freelancerInfo[0].freelancing_field ?? '';
        } else {
            // Handle null case for freelancerInfo[0]
            // Set default values or handle the error accordingly
            this.firstName = '';
            this.lastName = '';
            this.phoneNumber = '';
            this.email = '';
            this.freelancing_field = '';
        }

        if (this.freelancerInfo[1]) {
            this.niche = this.freelancerInfo[1].niche ?? '';
            this.other_roles = this.freelancerInfo[1].other_roles ?? '';
        } else {
            // Handle null case for freelancerInfo[1]
            // Set default values or handle the error accordingly
            this.niche = '';
            this.other_roles = '';
        }
    }

};
</script>

<style scoped>

#send-btn{
    background-color:#1c68c4;
}
.portfolio{
text-align: center;
color:#1c68c4;
}
</style>