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
                </div>
                <div class="card-content">
                    <div class="card-body">
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
                            <div class="row"  style="text-align: center;">
                                
                                <div class="col pd-right">
                                    <div class="form-group">
                                        <option value="">Freelancing Field</option>
                                        <select name="field"  v-model="freelancing_field" class="form-control" required>
                                            <option value="writing">Writing</option>
                                            <option value="design">Graphic Design</option>
                                            <option value="website">Web Development</option>
                                            <option value="mobile_app">App Development</option>
                                            <option value="data_science">Data Science</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <router-link class="btn btn-theme btn-circle" to="/freelancer-register" data-text="Previous">
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
    </div>
</section>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'FR2',
  data() {
    return {
     firstName:null,
     lastName: null,
     phoneNumber: null,
     email: null,
     freelancing_field: null,
    };
  },
  computed: {
    ...mapState(['freelancerInfo']),
  },
  methods: {
    next(){
        const newData = {
            firstName: this.firstName,
            lastName:  this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            freelancing_field: this.freelancing_field,
      };
      this.$store.commit('setFreelancerInfo', [...this.freelancerInfo, newData]);
    this.$router.push("/fr3");
    }
  },
}
</script>

<style scoped>

#send-btn{
    background-color:#1c68c4;
}

</style>