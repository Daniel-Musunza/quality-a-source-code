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
                    <p>Quality-A only accepts Experienced Freelancers. This can be from anywhere inthe world. You only have to provide us with your Resume, writers you will do one assignment and developers you'll provide us with your portfolio</p>
                    <p>Kindly fill out all the fields to Register your Free account</p>
                    <h6>why you should collaborate with  us</h6>
                            <ol>
                                <li>Plenty Of Tasks</li>
                                <li>Good Payment</li>
                                <li>No Payment Delays</li>
                                <li>Built-in Plagiarism Checker</li>
                            </ol>
                           
                    <router-link class="btn btn-theme btn-circle" to="/fr2" data-text="Next">
                        <span>N</span><span>e</span><span>x</span><span>t</span>
                    </router-link>
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
</style>