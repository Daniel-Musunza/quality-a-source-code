<template>
    <input type="checkbox" id="nav-toggle">
 
    <div class="main-content">
        
    <div class="container">
      <ModalItem v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
        <!-- <img src="../assets/client/images/logo.png" style="height:200px;" class="logo" > -->
          <div class="row">
            <div class="col-md-6 offset-md-3">
            <div class="col-md-12">
              <div>
                <div>
                  <h2>Account Settings</h2>
                  <hr />
                </div>
                <div class="initials" >
                  <div>
                    <img :src="profileCoverPhoto" :alt="this.$store.state.profileInitials" height="30px">
                  </div>
                 
                </div>
                <div v-if="admin" class="admin-badge">
                 <span> <i class="fa-solid fa-user"></i> Admin</span>
          
                </div>
                <form>
               <strong>   {{ firstName }} {{ lastName }}</strong>
                  <br/>
                  {{ niche }}
                  <TheLoader v-if="loading"/>
                  <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input
                    type="text"
                    class="form-control"
                    id="firstName" v-model.trim="firstName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="lastName" >Last Name</label>
                    <input
                    type="text"
                    class="form-control"
                    id="lastName" v-model.trim="lastName"
                   />
                  </div>
                  <div class="form-group" v-if="freelancer||admin">
                    <label for="username">Username</label>
                    <input
                    type="text"
                    class="form-control"
                    id="username" v-model.trim="username"
                  />
                  </div>
                  <div class="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                    type="text"
                    class="form-control"
                    id="phoneNumber" v-model.trim="phoneNumber"
                   />
                  </div>
                  <div  v-if="freelancer||admin" class="form-group">
                    <label for="niche">Niche</label>
                    <input
                    type="text"
                    class="form-control"
                    id="niche" v-model.trim="niche"
                    />
                  </div>
                  <div  v-if="freelancer||admin" class="form-group">
                    <label for="freelancing_field">Freelancing Field:</label>
                      {{ freelancing_field }}

                  </div>
                  <div  v-if="freelancer||admin" class="form-group">
                    <label for="portfolio_link">Portfolio Link:</label>
                    <a :href="portfolio_link" >{{ portfolio_link }}</a>
                  </div>
                  <div v-if="freelancer||admin" class="form-group">
                    <label>Other Roles:</label>
                    <ol>
                    <li v-for="role in other_roles" :key="role">
                        {{ role }}
                    </li>
                </ol>
                  </div>
                  <div v-if="freelancer||admin" class="form-group">
                    <button @click.prevent="toggleOtherRoles()"
                    class="form-control"
                    >Add Other Roles</button>

                    <div v-if="otherRoles" style="display: flex; flex-direction: row; margin: 10px 0; flex-wrap: wrap;">
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Writing</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="academic_writing" subject="">
                                        <label for="subject-7">Academic Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="article_writing" subject="">
                                        <label for="subject-7">Article Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="blog_writing" subject="">
                                        <label for="subject-7">Blog Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="copywriting" subject="">
                                        <label for="subject-7">Copywriting</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="content_writing" subject="">
                                        <label for="subject-7">Content Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="ebook_writing" subject="">
                                        <label for="subject-7">eBook Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="fiction_writing" subject="">
                                        <label for="subject-7">Fiction Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="writing_translation" subject="">
                                        <label for="subject-7">Writing Translation</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="proofreading" subject="">
                                        <label for="subject-7">Proofreading</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="legal_writing" subject="">
                                        <label for="subject-7">Legal Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="resume/cv_writing" subject="">
                                        <label for="subject-7">Resume/CV Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="transcription_writing" subject="">
                                        <label for="subject-7">Transcription Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="technical_writing" subject="">
                                        <label for="subject-7">Technical Writing</label>
                                        </li>
                                        </ul>
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Graphic Design</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="logo_designs" subject="">
                                        <label for="subject-7">Logo Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="photoshop_editing" subject="">
                                        <label for="subject-7">Photoshop Editing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="website_mockup_designs" subject="">
                                        <label for="subject-7">Website Mockup Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="poster_designs" subject="">
                                        <label for="subject-7">Poster Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="icons_designs" subject="">
                                        <label for="subject-7">Icons Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="t-shirt_designs" subject="">
                                        <label for="subject-7">T-Shirt Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="infographic_designs" subject="">
                                        <label for="subject-7">Infographic Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="book_cover_designs" subject="">
                                        <label for="subject-7">Book Cover Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="cad_designs" subject="">
                                        <label for="subject-7">CAD Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="cartoon_art" subject="">
                                        <label for="subject-7">Cartoon Art</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="banner/ad_designs" subject="">
                                        <label for="subject-7">Banner/Ad Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="wedding_album_designs" subject="">
                                        <label for="subject-7">Wedding Album Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="sketch_art" subject="">
                                        <label for="subject-7">Sketch Art</label>
                                        </li>
                                        </ul>
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Website Development</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="front-end_development" subject="">
                                        <label for="subject-7">Front-end Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="back-end_development" subject="">
                                        <label for="subject-7">Back-end Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="ux/ui_designing" subject="">
                                        <label for="subject-7">UX/UI Designing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="plugin_development" subject="">
                                        <label for="subject-7">Plugin Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="wordpress_development" subject="">
                                        <label for="subject-7">WordPress Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="bug_fixing" subject="">
                                        <label for="subject-7">Bug Fixing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="server_administration" subject="">
                                        <label for="subject-7">Server Administration</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="programming" subject="">
                                        <label for="subject-7">Programming</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="m-pesa_integration" subject="">
                                        <label for="subject-7">M-pesa Integration</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="fugu_api_integration" subject="">
                                        <label for="subject-7">Fugu API Integration</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="seo_consultations" subject="">
                                        <label for="subject-7">SEO Consultations</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="career_advisor" subject="">
                                        <label for="subject-7">Career Advisor</label>
                                        </li>
                                        </ul>
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Mobile-app Development</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="app_ui_designs" subject="">
                                        <label for="subject-7">App UI Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="mobile_app_development" subject="">
                                        <label for="subject-7">Mobile App Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="game_development" subject="">
                                        <label for="subject-7">Game Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="software_development" subject="">
                                        <label for="subject-7">Software Development</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="system_development" subject="">
                                        <label for="subject-7">System Development</label>
                                        </li>
                                        <br/>
                                        <strong>Data Science</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="data_entry" subject="">
                                        <label for="subject-7">Data Entry</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="data_analysis" subject="">
                                        <label for="subject-7">Data Analysis</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="business_emails" subject="">
                                        <label for="subject-7">Business Emails</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="3d_model_designs" subject="">
                                        <label for="subject-7">3D Model Designs</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="virtual_assistant" subject="">
                                        <label for="subject-7">Virtual Assistant</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="database_management" subject="">
                                        <label for="subject-7">Database Management</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="data_visualization" subject="">
                                        <label for="subject-7">Data Visualization</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="machine_learning" subject="">
                                        <label for="subject-7">Machine Learning</label>
                                        </li>
                                        </ul>
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Video & Animation</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="video_editing" subject="">
                                        <label for="subject-7">Video Editing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="motion_graphics" subject="">
                                        <label for="subject-7">Motion Graphics</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="2d_animation" subject="">
                                        <label for="subject-7">2D Animation</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="3d_animation" subject="">
                                        <label for="subject-7">3D Animation</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="explainer_videos" subject="">
                                        <label for="subject-7">Explainer Videos</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="whiteboard_animation" subject="">
                                        <label for="subject-7">Whiteboard Animation</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="script_writing" subject="">
                                        <label for="subject-7">Script Writing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="voice_over" subject="">
                                        <label for="subject-7">Voice Over</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="subtitles_captions" subject="">
                                        <label for="subject-7">Subtitles/Captions</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="video_production" subject="">
                                        <label for="subject-7">Video Production</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="photo_slideshow" subject="">
                                        <label for="subject-7">Photo Slideshow</label>
                                        </li>
                                        </ul>
                                        <ul class="list-unstyled list-icon mb-4">
                                        <strong>Marketing & Sales</strong>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="social_media_marketing" subject="">
                                        <label for="subject-7">Social Media Marketing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="email_marketing" subject="">
                                        <label for="subject-7">Email Marketing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="content_marketing" subject="">
                                        <label for="subject-7">Content Marketing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="search_engine_optimization" subject="">
                                        <label for="subject-7">Search Engine Optimization (SEO)</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="search_engine_marketing" subject="">
                                        <label for="subject-7">Search Engine Marketing (SEM)</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="google_ads" subject="">
                                        <label for="subject-7">Google Ads</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="facebook_ads" subject="">
                                        <label for="subject-7">Facebook Ads</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="instagram_marketing" subject="">
                                        <label for="subject-7">Instagram Marketing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="youtube_marketing" subject="">
                                        <label for="subject-7">YouTube Marketing</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="sales_funnel_creation" subject="">
                                        <label for="subject-7">Sales Funnel Creation</label>
                                        </li>
                                        <li>
                                        <input type="checkbox" id="subject-7" v-model="other_roles" value="lead_generation" subject="">
                                        <label for="subject-7">Lead Generation</label>
                                        </li>
                                        </ul>
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
                                        
                  <div class="form-group">
                    <label for="email" >Email</label>
                    <input
                    disabled
                    type="email"
                    class="form-control"
                    id="email" v-model.trim="email"
                    />
                  </div>
                  <div class="my-3">
                    <button @click.prevent="updateProfile">Save Changes</button>
                  </div>
                </form>
                <div class="payment-buttom" @click="toggleVisaCard()">
                  <button>Verify Payment Details</button>
                </div>
                <div class="visacard" v-if="visacard">
                  <button type="button" style="float: right"  @click="toggleVisaCard()">close</button>
                  <VisaCard/>
                </div>
              </div>
             </div>
            </div>
          </div>
    </div>
    </div>
</template>
    
<script>
  import SideBar from "@/components/core/SideBar.vue";
  import Header from "@/components/core/Header.vue";
  import ModalItem from "@/components/ModalItem";
  import TheLoader from "@/components/TheLoader";
  import VisaCard from "@/components/core/VisaCard";
  import { getFirestore, doc, updateDoc, collection, getDoc, } from "firebase/firestore";
  import { getStorage ,ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"; 
  import { getAuth} from "firebase/auth";
  export default {
      components: {
          SideBar, 
          Header,
          ModalItem,
          TheLoader,
          VisaCard
      },
          name: "ProfileView",
          data () {
          return {
              available: null,
              profileMenu: null,
              modalMessage: "Changes were saved!",
              modalActive: false,
              photoAvailable: null,
              loading: null,
              file: null,
              otherRoles: null,
              visacard: null

          }
      },

          methods: {
            toggleVisaCard(){
              this.visacard= !this.visacard
          },
              toggleAvailable(){
              this.available= !this.available
          },
          toggleProfileMenu(){
              this.profileMenu= !this.profileMenu
          },
          toggleOtherRoles(){
              this.otherRoles= !this.otherRoles
          },
            closeModal() {
              this.modalActive = !this.modalActive;
            },
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
        async updateProfile(){
            this.loading = true;
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

                    

                          //updating clients status to be on review
                          const auth = getAuth();
                          const firestore = getFirestore();

                          const userRef= doc(collection(firestore, "users"), auth.currentUser.uid);
                        
                          if(!this.freelancer){
                            await updateDoc(userRef, {
                            firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                              profileCoverFile: downloadURL,
                              profileCoverFileName: this.$store.state.orderFileName,
                          }); 

                            const clientRef= doc(collection(firestore, "clients"), auth.currentUser.uid);
                            await updateDoc(clientRef, {
                              firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                              profileCoverFile: downloadURL,
                              profileCoverFileName: this.$store.state.orderFileName,
                            }); 
                        };
                        if(this.freelancer){

                          await updateDoc(userRef, {
                            firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                              username: this.username,
                              niche: this.niche,
                              freelancing_field: this.freelancing_field,
                              // other_roles: this.other_roles,
                              portfolio_link: this.portfolio_link,
                              profileCoverFile: downloadURL,
                              profileCoverFileName: this.$store.state.orderFileName,
                          }); 

                            const freelancerRef= doc(collection(firestore, "freelancers"), auth.currentUser.uid);
                            await updateDoc(freelancerRef, {
                              firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                              freelancing_field: this.freelancing_field,
                              niche: this.niche,
                              // other_roles: this.other_roles,
                              portfolio_link: this.portfolio_link,
                              profileCoverFile: downloadURL,
                              profileCoverFileName: this.$store.state.orderFileName,
                            }); 
                        };
                          this.$store.commit("setProfileInitials");
                          this.$store.dispatch("getCurrentUser", userRef);

                  
                        }
                  );
                
                  this.loading = false;
                  this.modalActive = !this.modalActive;
                  return;
                  }
                  else {
                      const auth = getAuth();
                          const firestore = getFirestore();
                          const userRef= doc(collection(firestore, "users"), auth.currentUser.uid);
                        
                          if(!this.freelancer){
                            await updateDoc(userRef, {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            phoneNumber: this.phoneNumber,
                          }); 

                            const clientRef= doc(collection(firestore, "clients"), auth.currentUser.uid);
                            await updateDoc(clientRef, {
                              firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                            }); 
                        };
                        if(this.freelancer){
                          await updateDoc(userRef, {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            phoneNumber: this.phoneNumber,
                            freelancing_field: this.freelancing_field,
                            niche: this.niche,
                            // other_roles: this.other_roles,
                            portfolio_link: this.portfolio_link,
                          }); 

                            const freelancerRef= doc(collection(firestore, "freelancers"), auth.currentUser.uid);
                            await updateDoc(freelancerRef, {
                              firstName: this.firstName,
                              lastName: this.lastName,
                              phoneNumber: this.phoneNumber,
                              freelancing_field: this.freelancing_field,
                              niche: this.niche,
                              // other_roles: this.other_roles,
                              portfolio_link: this.portfolio_link,
                            }); 
                        };
                          this.$store.commit("setProfileInitials");
                          this.$store.dispatch("getCurrentUser", userRef);

                          this.loading = false;
                          this.modalActive = !this.modalActive;
                          return;
                  }
        
          },
      
      
          },

    computed: {
    
      firstName: {
          get() {
            return this.$store.state.profileFirstName;
          },
          set(payload){
            this.$store.commit("changeFirstName", payload);
          }
        },
        lastName: {
          get() {
            return this.$store.state.profileLastName;
          },
          set(payload){
            this.$store.commit("changeLastName", payload);
          }
        },
        username: {
          get() {
            return this.$store.state.profileUsername;
          },
          set(payload){
            this.$store.commit("changeUsername", payload);
          }
        },
        phoneNumber: {
          get() {
            return this.$store.state.profilePhoneNumber;
          },
          set(payload){
            this.$store.commit("changePhoneNumber", payload);
          }
        },
        niche: {
          get() {
            return this.$store.state.profileNiche;
          },
          set(payload){
            this.$store.commit("changeNiche", payload);
          }
        },
        freelancing_field: {
          get() {
            return this.$store.state.profileFreelancing_field;
          },
          set(payload){
            this.$store.commit("changeFreelancing_field", payload);
          }
        },  
        other_roles: {
          get() {
            return this.$store.state.other_Roles;
          },
          set(payload){
            this.$store.commit("changeOther_Roles", payload);
          }
        },
        portfolio_link: {
          get() {
            return this.$store.state.profilePortfolioLink;
          },
          set(payload){
            this.$store.commit("changePortfolioLink", payload);
          }
        },  
        profileCoverPhoto: {
          get() {
            return this.$store.state.profileCoverPhoto;
          }
        },
        email: {
          get() {
            return this.$store.state.profileEmail;
          }
        },
        admin() {
            return this.$store.state.profileAdmin;
        },
        freelancer() {
            return this.$store.state.profileFreelancer;
        }

  },

  async mounted() {
    
    const auth = getAuth();
    await auth.onAuthStateChanged(user => {
      this.$store.dispatch("getCurrentUser", user);

      });
    
    }
  }
</script>
    
<style scoped>
    img{
      width: 100px;
      border-radius: 50px;
    }
    label{
        margin-left:10px;
    }
    
    ul {
        list-style-type: none;
       
      }
            h2 {
                text-align: center;
                margin-bottom: 16px;
                font-weight: 300;
                font-size: 32px;
            }
            .profile-info {
                border-radius: 8px;
                box-shadow: 0 4px 0px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.001);
                padding: 32px;
                background-color: #f1f1f1;
                display: flex;
                flex-direction: column;
                max-width: 600px;
                margin: 32px auto;
            }
            .col-md-12 {
              align-items: center;
            }
            .initials {
                    position: initial;
                    width: 80px;
                    height: 80px;
                    font-size: 32px;
                    background-color: #303030;
                    color: #fff;
                    display: flex;
                    align-self: center;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
            .admin-badge {
                    display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: #303030;
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;
                    width: 30%;
                }
              button {
                display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: #7880f1;
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;
                    width: 40%;
              }
              .initials label {
               font-size: 18px;
               font-weight: 600;
              }
             .edit {
          display: flex;
          color: #7880f1;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          /* background-color: #fff; */
          transition: 0.5s ease all;
         }
         .edit:hover{
          color: #fff;
          background-color: #1cfd07;
         }
         @media (min-width:977px){
        .row {
          align-items:center;
        }
      }

.profile-menu {
    position: absolute;
    border-radius: 10px;
    top: 60px;
    right: 0; 
    width: 270px;
    background-color: #fff;
    box-shadow: 0 4px 0px -1px #79aae6;
  }
  .info {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;
  }
  .right {
    flex: 1;
    margin-left: 24;
  }
  i{
    padding-right:10px;
  }
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    transition: margin-left 300ms;
}
.sidebar-brand{
    height: 90px;
    padding:1rem 0rem 1rem 2rem; 
}
.sidebar-brand span {
    display: inline-block;
    padding-right: 1rem;
}
.sidebar-menu {
    margin-top: 1rem;
}
.sidebar-menu li {
    width: 100%;
    margin-bottom: 1.3rem;
    padding-left: 2rem;
    font-size: 15px;
}
.sidebar-menu li .available{
    margin-left:3rem ;
}
.sidebar-menu li .available a span{
    margin-left: 3.1rem;
    background: #79aae6;
    border-radius: 50%;
    padding-left: .5rem;
    font-size: 1.5rem;
}
a .li-span{
    margin-left: 0rem;
    background: #79aae6;
    border-radius: 50%;
    font-size: 1.5rem;
    padding-left:.5rem;
}
.sidebar-menu a {
    display: block;
    color: #02060b;
    padding-bottom: 1rem;
}
.sidebar-menu a.active {
    color: #1c68c4;
    padding-top: 1rem;
    padding-bottom: 1rem;
} 
.sidebar-menu a span:first-child {
    font-size: 1.5rem;
    padding-right: 1rem;
} 
#nav-toggle:checked + .sidebar {
    width: 70px;
}
#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
   padding-left: 1rem;
   text-align: center;
}
#nav-toggle:checked + .sidebar li a{
    padding-left: 0rem;
 }
 #nav-toggle:checked + .sidebar li a span{
    padding-right: 1rem;
 }
#nav-toggle:checked + .sidebar .sidebar-brand h3 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
   display: none;
}
#nav-toggle:checked ~ .main-content{
    margin-left: 70px;
 }
#nav-toggle:checked ~ .main-content header{
   width: calc(100% -70px);
   left: 70px;
 }
.main-content {
    transition: margin-left 300ms;
    margin-left: 200px;
}

.main-content header{
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 2px 2px 5px rgba(0,0,0, 0.2);
    position: fixed;
    left: 200px;
    right: 0;
    /* width: calc(100% -200px); */
    top: 0;
    z-index: 100;
    transition: left 300ms;

}
#nav-toggle{
    display: none;
}
header h3 {
    color: #222;
    margin-right: 50px;
}
header label span {
    font-size: 1.7rem;
    padding-left: 1rem ;
}

.user-wrapper{
    display: flex;
    align-items: center;
    float: right;
     
}
.user-wrapper span{
    font-size: 25px;
    margin-right: 30px;
     
}
.user-wrapper img{
    border-radius: 50%;
    margin-right: 1rem;
}
.user-wrapper small {
    display: inline-block;
    color:var(--text-grey) ;
    margin-top: -10px !important;
}
main{
    margin-top: 85px;
    padding: 2rem 1.5rem;
    background: #f1f5f9;
    min-height: calc(100vh -90px);

}
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    margin-top: 1rem;
}
.card-single {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 2rem;
    border-radius: 2px;
}
.card-single div:last-child span{
    color: #1c68c4;
    font-size:3.5rem;
}
.card-single div:first-child span{
    color: var(--text-grey);

}
.card-single:last-child{
    background: #1c68c4;
}
.card-single:last-child div:last-child span{
    color: #fff;
}
.card-single:last-child div:first-child span{
   color: #fff;
}
.recent-grid{
    margin-top: 3.5rem;
}
.recent-grid2 {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: 70% auto;
}
.card{
   background: #fff; 
}
.card-header,
.card-body {
    padding: 1rem;
    width: 100%;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header button {
    background: #1c68c4;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    padding: .5rem 1rem;
    border: 1px solid #1c68c4;
}
@media only screen and (max-width:1200px){
   .sidebar {
        width: 70px;
    }
    .sidebar .sidebar-brand,
     .sidebar li {
       padding-left: 1rem;
       text-align: center;
    }
 .sidebar li a{
        padding-left: 0rem;
     }
   .sidebar li a span{
        padding-right: 1rem;
     }
 .sidebar .sidebar-brand h3 span:last-child,
  .sidebar li a span:last-child {
       display: none;
    }
     .main-content{
        margin-left: 70px;
     }
   .main-content header{
       width: calc(100% -70px);
       left: 70px;
     }
     .sidebar:hover {
        width: 200px;
        z-index: 200;
    }
    .sidebar:hover .sidebar-brand,
     .sidebar:hover li {
       padding-left: 2rem;
       text-align: left;
    }
 .sidebar:hover li a{
        padding-left: 1rem;
     }
   .sidebar:hover li a span{
        padding-right: 1rem;
     }
 .sidebar:hover .sidebar-brand h3 span:last-child,
  .sidebar:hover li a span:last-child {
       display: inline;
    }
}
 @media only screen and (max-width: 960px) {
    .cards  {
        grid-template-columns:repeat(3, 1fr);
    }
    .recent-grid {
        grid-template-columns: 60% 40%;
    }
 }
 @media only screen and (max-width: 768px) {
    .cards  {
        grid-template-columns:repeat(2, 1fr);
    }
    .recent-grid {
        grid-template-columns: 100%;
    }
    .search-wrapper{
        display: none;
    }
    .sidebar{
        left: -100% !important;
    }
    header h3 {
        display: flex;
        align-items: center;
    }
    header h3 label {
        display:inline-block;
        background:#1c68c4;
        padding-left: 0rem;
        margin-left: 1rem;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center !important;
    }
    header h3 span {
        text-align: center;
        padding-right: 1rem;
      
    }
    header h3 {
        font-size: 30px;
    }
    .main-content {
        width: 100%;
        margin-left: 0rem;
    }
    header {
        width: 100% !important;
        left: 0 !important;
        
    }
    #nav-toggle:checked + .sidebar {
        left: 0 !important;
        z-index: 100;
        width: 200px;
    }
    #nav-toggle:checked + .sidebar {
        width: 200px;
        z-index: 200;
    }
    #nav-toggle:checked + .sidebar .sidebar-brand,
    #nav-toggle:checked + .sidebar li {
       padding-left: 2rem;
       text-align: left;
    }
    #nav-toggle:checked + .sidebar li a{
        padding-left: 1rem;
     }
     #nav-toggle:checked + .sidebar li a span{
        padding-right: 1rem;
     }
     #nav-toggle:checked + .sidebar.sidebar-brand h3 span:last-child,
     #nav-toggle:checked + .sidebar li a span:last-child {
       display: inline;
    }
    #nav-toggle:checked ~ .main-content {
        margin-left: 0rem !important;
    }
 }
 @media only screen and (max-width: 560px) {
    .cards {
        grid-template-columns: 100%;
    }
 }
</style>