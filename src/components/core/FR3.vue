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
                               
                                        <div class="row">
                                            
                                            <div class="col-sm-6 pd-right">
                                                <h6>What's your Niche</h6>
                                                <div class="form-group">
                                                    <input type="text" name="niche" class="form-control"
                                                        placeholder="Your Niche" required="" v-model="niche">
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <h6 style="margin-left: 50px;">Add other roles</h6>
                                        <div style="display: flex; flex-direction: row; margin: 10px 0; flex-wrap: wrap;">
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
                                    <router-link class="btn btn-theme btn-circle" to="/fr2" data-text="Previous">
                                        <span>P</span><span>r</span><span>e</span><span>v</span><span>i</span><span>o</span><span>u</span><span>s</span>
                                    </router-link>
                                    <div class="btn btn-theme btn-circle" @click.prevent="next()" data-text="Next" >
                                        <span>N</span><span>e</span><span>x</span><span>t</span>
                                    </div>
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

export default {
  name: 'FR3',
  data() {
    return {
     niche:null,
     other_roles: [],
     
    };
  },
  computed: {
    ...mapState(['freelancerInfo']),
  },
  methods: {
    next(){
        const newData = {
         niche: this.niche,
         other_roles: this.other_roles
      };
      this.$store.commit('setFreelancerInfo', [...this.freelancerInfo, newData]);
    this.$router.push("/fr4");
    }
  },
}
</script>

<style scoped>

#send-btn{
    background-color:#1c68c4;
}
label {
        margin-left: 10px;
}

.row{
        margin-left: 40px;
}
</style>