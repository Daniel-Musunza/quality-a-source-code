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
                                <div class="row">
                                    <div class="col-sm-6 pd-right">
                                        <div class="form-group">
                                            <input type="text" name="portfolio" class="form-control"
                                                placeholder="LINK TO YOUR PORTFOLIO">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 pd-left">
                                        <div class="form-group">
                                            <input type="file" name="avatar" class="form-control">
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
                                        <div class="row">
                                            <div class="col-sm-6 pd-right">
                                                <div class="form-group">
                                                    <input type="password" name="password" id="input-password" class="form-control"
                                                        placeholder="Password" required="">
                                                </div>
                                            </div>
                                            <div class="col-sm-6 pd-left">
                                                <div class="form-group">
                                                    <input type="password" name="password_confirmation" class="form-control"
                                                        placeholder="Confirm Password" required="">
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
                                        <button type="submit" class="btn blue-bg btn-lg btn-block" id="send-btn">
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
export default {

}
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