<template>
  <!-- page wrapper start -->

  <div class="page-wrapper">

    <!-- preloader start -->

    <!-- <div id="ht-preloader">
        <div class="loader clear-loader">
            <div class="loader-box"></div>
            <div class="loader-box"></div>
            <div class="loader-box"></div>
            <div class="loader-box"></div>
            <div class="loader-wrap-text">
                <div class="text">
                    <span>F</span><span>R</span><span>E</span><span>E</span><span>L</span><span>A</span><span>N</span><span>C</span><span>E</span><span>R</span><span>S</span>
                </div>
            </div>
        </div>
    </div> -->
    <!-- preloader end -->
    <logInModal v-if="login" @click="toggleLogin" style="margin-top:100px; position: fixed;"/>
    <registerModal v-if="register" @click="toggleRegister" style="margin-top:100px; position: fixed; margin-right:100px;"/>
    <!--header start-->
    <header id="site-header" class="header header-1">
        <div class="container-fluid">
            <div id="header-wrap" class="box-shadow">
                <div class="row">
                    
                    <div class="col-lg-12">
                        <!-- Navbar -->
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand logo" href="/">
                                <img id="logo-img" class="img-center"
                                    src="client/images/logo.png" alt="">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation"> <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <!-- Left nav -->
                                <ul id="main-menu" class="nav navbar-nav ml-auto mr-auto">
                                    <li class="nav-item"> <a class="nav-link hashed active"
                                            href="#">Home</a>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link hashed" href="#about">What we offer
                                    </a>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link hashed"
                                            href="#service">Our Portfolio</a>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link hashed" href="#step">How To Get Started
                                            </a>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link"
                                            href="#reviews">Reviews</a>
                                    </li>
                                    <li v-if="mobileLogin" class="nav-item"> <a class="nav-link hashed"
                                        @click="toggleLogin()">Login</a>
                                    </li>
                                    <li v-if="mobileLogin" class="nav-item"> <a class="nav-link hashed"
                                        @click="toggleRegister()">Register</a>
                                    </li>
                                </ul>
                            </div>
                            
                        <a class="btn btn-theme btn-sm" @click="toggleRegister()" data-text="Register">
                              <span>R</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>e</span><span>r</span>
                        </a>
                        <a class="btn btn-theme btn-sm" @click="toggleLogin()" data-text="Login">
                              <span>L</span><span>o</span><span>g</span><span>i</span><span>n</span>
                        </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!--header end-->

<section id="home" class="fullscreen-banner banner p-0 bg-contain bg-pos-r" data-bg-img="images/bg/01.png') }}">
    <div class="spinner-eff">
        <div class="spinner-circle circle-1"></div>
        <div class="spinner-circle circle-2"></div>
    </div>
    <div class="align-center pt-0">

        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 order-lg-1">
                    <img class="img-center wow jackInTheBox" data-wow-duration="3s" src="@/assets/client/images/banner/01.png" alt="">
                </div>
                <div class="col-lg-6 col-md-12 order-lg-1 md-mt-5">
                    <h1 class="mb-4 wow fadeInUp" data-wow-duration="1.5s"><a href="javascript:void(0)"
                            style="color: rgb(11, 52, 124)">welcome</a> To Quality A</h1>
                    <p class="lead mb-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                        QualityA has emerged to a plartform where Quality Freelancers across the globe help do tasks for Clients remotely. 
                        <!-- The popular features currently are posting orders to the System, Management assigns orders to freelancers and digital payment. -->
                            It still remains to be a tool for you to track the records of your oders effeciently. It provides the ability to track payments and balances, and many other amazing great features.All conveniently packaged for you to make sure your business operations execute without a hitch. </p>
                        <h5>why you should choose  us</h5>
                        <ol>
                            <li>Quality Services</li>
                            <li>Ontime task completion</li>
                            <li>Affordable Services</li>
                            <li>Built-in Resume/CV and Cover Letter Maker </li>
                        </ol>
                       
                    
                    <a class="btn btn-dark wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s" href="#"
                        data-text="Learn More"> <span>L</span><span>e</span><span>a</span><span>r</span><span>n</span>
                        <span> </span><span>M</span><span>o</span><span>r</span><span>e</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!--hero section end-->


<!--body content start-->

<div class="page-content">
    <!--about start-->

    <section id="about" class="pos-r bg-contain bg-pos-l py-10" data-bg-img="images/bg/02.png') ">
        <div class="container">
            <div class="section-title mb-4" >
                <div class="title-effect">
                    <div class="bar bar-top"></div>
                    <div class="bar bar-right"></div>
                    <div class="bar bar-bottom"></div>
                    <div class="bar bar-left"></div>
                </div>
                <h6>Quality A Dashboard</h6>
                <p style="color: #2575fc;">No more haedache, let us do the Job for you</p>
                <h2>Our Services</h2>
            </div>
            <!-- <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 image-column p-0 pr-lg-5"> -->
                   <div style="display: flex; flex-direction: row; margin:10px 0; flex-wrap: wrap;">
                        <ul class="list-unstyled list-icon mb-4">
                            <h4>Writing</h4>
                            <li ><i class="la la-check"></i>Academic Writing</li>
                            <li><i class="la la-check"></i>Article Writing</li>
                            <li><i class="la la-check"></i>Blog Writing</li>
                            <li><i class="la la-check"></i>Copywriting</li>
                            <li ><i class="la la-check"></i> Content Writing</li>
                            <li><i class="la la-check"></i>eBook Writing</li>
                            <li><i class="la la-check"></i>Fiction Writing</li>
                            <li><i class="la la-check"></i>Writing Translation</li>
                            <li><i class="la la-check"></i>Proofreading</li>
                            <li><i class="la la-check"></i>Legal Writing</li>
                            <li><i class="la la-check"></i>Resume/CV Writing</li>
                            <li><i class="la la-check"></i>Transcription Writing</li>
                            <li><i class="la la-check"></i>Technical Writing</li>
                        </ul>
                        <ul class="list-unstyled list-icon mb-4"> 
                            <h4>Graphic Design</h4>
                            <li><i class="la la-check"></i>Logo Designs</li>
                            <li><i class="la la-check"></i>Photoshop Editing</li>
                            <li><i class="la la-check"></i> Website Mockup Designs</li>
                            <li><i class="la la-check"></i>Poster Designs</li>
                            <li><i class="la la-check"></i>Icons Designs</li>
                            <li><i class="la la-check"></i>T-Shirt Designs</li>
                            <li><i class="la la-check"></i>Infographic Designs</li>
                            <li><i class="la la-check"></i>Book Cover Designs</li>
                            <li><i class="la la-check"></i>CAD Designs</li>
                            <li><i class="la la-check"></i>Cartoon Art</li>
                            <li><i class="la la-check"></i>Banner/Ad Designs</li>
                            <li><i class="la la-check"></i>Wedding Album Designs</li>
                            <li><i class="la la-check"></i>Sketch Art</li>
                            <li><i class="la la-check"></i>3D Model Designs</li>
                            <li><i class="la la-check"></i>Company Profile</li>
                        </ul>
                        <ul class="list-unstyled list-icon mb-4">

                            <h4>Website Development</h4>
                            <li><i class="la la-check"></i>Front-end Development</li>
                            <li><i class="la la-check"></i>Back-end Development</li>
                            <li><i class="la la-check"></i>UX/UI Designing</li>
                            <li><i class="la la-check"></i>Plugin Development</li>
                            <li><i class="la la-check"></i>WordPress Development</li>
                            <li><i class="la la-check"></i>Bug Fixing and programming</li>
                            <li><i class="la la-check"></i>Server Administration</li>
                            <li><i class="la la-check"></i>M-pesa Integration</li>
                            <li><i class="la la-check"></i>Fugu API integration</li>
                            <li><i class="la la-check"></i>Penetration Testing</li>

                            <h4>Consultation Services</h4>
                            <li><i class="la la-check"></i>SEO Consultations</li>
                            <li><i class="la la-check"></i>Career Advisor</li>
                        </ul>
                        <ul class="list-unstyled list-icon mb-4">
                            <h4>App Development</h4>
                            <li><i class="la la-check"></i>App UI Designs</li>
                            <li><i class="la la-check"></i>Mobile App Development</li>
                            <li><i class="la la-check"></i>Game Development</li>
                            <li><i class="la la-check"></i>Software Development</li>
                            <li><i class="la la-check"></i>System Development</li>

                            <h4>Other Services</h4>
                            <li><i class="la la-check"></i>Data Entry</li>
                            <li><i class="la la-check"></i>Data Analysis</li>
                            <li><i class="la la-check"></i>Business Emails</li> 
                        </ul>
                    <!-- </div>
                </div> -->
                <div class="col-lg-5 ml-auto col-md-12 md-mt-5">
                    
                    <a class="btn btn-border btn-circle" href="#"
                        data-text="Sign Up Now">
                        <span>S</span><span>i</span><span>g</span><span>n</span><span>u</span><span>p</span>
                        <span> </span><span>N</span><span>o</span><span>w</span>
                    </a>
                    <a class="btn btn-theme btn-circle" href="#service" data-text="More Services">
                        <span>M</span><span>o</span><span>r</span><span>e</span><span></span>
                        <span>
                        </span><span>S</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!--about end-->


    <!--feature start-->
    <div class="title-effect">
        <div class="bar bar-top"></div>
        <div class="bar bar-right"></div>
        <div class="bar bar-bottom"></div>
        <div class="bar bar-left"></div>
    </div>
    <div style="text-align: center;">
    <h2>Our Portfolio</h2>
    <h6>some of our work</h6>
    </div>
    <section id="service" class="service pos-r bg-effect o-hidden">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="featured-item style-3">
                                <div class="featured-icon">
                                    <i class="fa fa-book"></i>
                                </div>
                                <div class="featured-title">
                                    <h5>Make your Own Resume/CV And a Free Professional Cover Letter.</h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Then you download in pdf,
                                    </p>
                                        <router-link class="btn btn-theme btn-circle" to="/resume/all-templates" data-text="Get Started">
                                            <span>G</span><span>e</span><span>t</span>
                                            <span>
                                            </span><span>S</span><span>t</span><span>a</span><span>r</span><span>t</span><span>e</span><span>d</span>
                                        </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-4">
                            <div class="featured-item style-3">
                                <div class="featured-icon">
                                    <img class="img-center wow jackInTheBox" data-wow-duration="3s"
                                    src="images/writing.jpg" alt="">
                                </div>
                                <div class="featured-title">
                                    <h5>Writing</h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Blogs</p>
                                    <p>Transcriptions</p>
                                    <p>Academic e.t.c</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="featured-item style-3">
                                <div class="featured-icon">
                                    <img class="img-center wow jackInTheBox" data-wow-duration="3s"
                                    src="images/graphics.jpeg" alt="">
                                </div>
                                <div class="featured-title">
                                    <h5>Graphic Designs</h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Logos</p>
                                    <p>Posters</p>
                                    <p>Book Covers e.t.c</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 mt-4">
                            <div class="featured-item style-3">
                                <div class="featured-icon">
                                    <img class="img-center wow jackInTheBox" data-wow-duration="3s"
                                    src="images/webdevelopment.jpeg" alt="">
                                </div>
                                <div class="featured-title">
                                    <h5>Websites</h5>
                                </div>
                                <div class="featured-desc">
                                    <p>Single Page</p>
                                    <p>E-commerce</p>
                                    <p>WordPress e.t.c</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--feature end-->


    <!--step start-->
    <section id="step" class="text-center pos-r">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10 ml-auto mr-auto">
                    <div class="section-title">
                        <div class="title-effect">
                            <div class="bar bar-top"></div>
                            <div class="bar bar-right"></div>
                            <div class="bar bar-bottom"></div>
                            <div class="bar bar-left"></div>
                        </div>
                        <h6>How It Works</h6>
                        <h2 class="title">An Easy Step-By-Step Process.</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="svg-container">
                    <svg id="svgC" width="100%" height="100%" viewBox="0 0 620 120"
                        preserveAspectRatio="xMidYMid meet"></svg>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="work-process">
                        <div class="box-loader"> <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="step-num-box">
                            <div class="step-icon"><span><i class="fa fa-user"></i></span>
                            </div>
                            <div class="step-num">01</div>
                        </div>
                        <div class="step-desc">
                            <h4>Register an account with us</h4>
                            <p class="mb-0">Create an account with us to access your own personalised
                                dashboard.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 md-mt-5">
                    <div class="work-process">
                        <div class="step-num-box">
                            <div class="step-icon"><span><i class="fa fa-upload"></i></span>
                            </div>
                            <div class="step-num">02</div>
                        </div>
                        <div class="step-desc">
                            <h4>Post Orders to the System</h4>
                            <p class="mb-0">wait for a payment message to inform you what you should pay. you can still negotiate on the price from the chat section</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 md-mt-5">
                    <div class="work-process">
                        <div class="box-loader"> <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="step-num-box">
                            <div class="step-icon"><span><i class="fa fa-share"></i></span>
                            </div>
                            <div class="step-num">03</div>
                        </div>
                        <div class="step-desc">
                            <h4>Payment</h4>
                            <p class="mb-0">Note: Only payments done through our offcial website are accepted. this is to avoid inconviences
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 md-mt-5">
                    <div class="work-process">
                        <div class="step-num-box">
                            <div class="step-icon"><span><i class="fa fa-file"></i></span>
                            </div>
                            <div class="step-num">04</div>
                        </div>
                        <div class="step-desc">
                            <h4>Management assigns Orders to Our team.</h4>
                            <p class="mb-0">we only assign orders to quality and trusted freelancers
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 md-mt-5">
                    <div class="work-process">
                        <div class="step-num-box">
                            <div class="step-icon"><span><i class="fa fa-file"></i></span>
                            </div>
                            <div class="step-num">05</div>
                        </div>
                        <div class="step-desc">
                            <h4>Your order will be delivered to you after completion</h4>
                            <p class="mb-0">This is done in the due time
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!--step end-->
    <!--pricing start-->
   
        <section id="reviews" class="service pos-r bg-effect o-hidden">
            <div style="text-align: center;">
                <h2>Reviews</h2>
                </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1" >
                        <div class="row">
                            <div class="col-lg-6 col-md-6" >
                                <div class="featured-item style-3" >
                                    <div class="featured-icon" style="display: flex; margin-bottom: 10px;">
                                        <img src="images/BuyoneFree_65.jpg" width="30px" alt="">
                                        <h6 style="margin-left: 10px;">Daniel</h6>
                                    </div>
                                    <div class="featured-desc">
                                        <p>Fantastic work. They built my website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6" >
                                <div class="featured-item style-3" >
                                    <div class="featured-icon" style="display: flex; margin-bottom: 10px;">
                                        <img src="images/BuyoneFree_65.jpg" width="30px" alt="">
                                        <h6 style="margin-left: 10px;">Daniel</h6>
                                    </div>
                                    <div class="featured-desc">
                                        <p>Fantastic work. They built my website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1" >
                        <div class="row">
                            <div class="col-lg-6 col-md-6" >
                                <div class="featured-item style-3">
                                    <div class="featured-icon" style="display: flex; margin-bottom: 10px;">
                                        <img src="images/BuyoneFree_65.jpg" width="30px" alt="">
                                        <h6 style="margin-left: 10px;">Daniel</h6>
                                    </div>
                                    <div class="featured-desc">
                                        <p>Fantastic work. They built my website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6" >
                                <div class="featured-item style-3" >
                                    <div class="featured-icon" style="display: flex; margin-bottom: 10px;">
                                        <img src="images/BuyoneFree_65.jpg" width="30px" alt="">
                                        <h6 style="margin-left: 10px;">Daniel</h6>
                                    </div>
                                    <div class="featured-desc">
                                        <p>Fantastic work. They built my website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <router-link class="btn btn-dark wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s" to="/client/reviews"
                data-text="See More"> <span>S</span><span>e</span><span>e</span>
                <span> </span><span>M</span><span>o</span><span>r</span><span>e</span>
            </router-link>
            </div>
            
        </section>
    
</div>

<!--body content end-->
    <!--footer start-->

    <footer class="footer footer-1 pos-r" data-bg-img="images/bg/05.png') ">
            <div class="subscribe-box">
    <div class="container">
        <div class="row subscribe-inner align-items-center">
            <div class="col-md-6 col-sm-12">
                <h4>Subscribe To Our Newsletter</h4>
                <p class="lead mb-0">Get latest news and feature updates from Quality A.</p>
            </div>
            <div class="col-md-6 col-sm-12 sm-mt-2">
                <div class="subscribe-form sm-mt-2">
                    <form id="mc-form" class="group">
                        <input type="email" value="" name="EMAIL" class="email" id="mc-email"
                            placeholder="Email Address" required="">
                        <input class="btn btn-theme" type="submit" name="subscribe" value="Subscribe">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="primary-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="footer-logo">
                    <img id="footer-logo-img" src="client/images/logo.png" class="img-center"
                        alt="">
                </div>
                <p class="mb-0"><router-link to="/" style="color: #2575fc">Quality A</router-link> is an online tool that
                    which hosts the best freelancers across the globe to help you improve your business and studies.</p>
            </div>
            <div class="col-lg-4 col-md-6 pl-md-5 sm-mt-5 footer-list justify-content-between d-flex">
                <ul class="list-unstyled w-100">
                    <li> <a href="#home">Home</a>
                    </li>
                    <li> <a href="#about">What we offer</a>
                    </li>
                    <li> <a href="#service">Our portfolio</a>
                    </li>
                    <li> <a data-toggle="modal" data-target="#termsModal">Terms and Policy</a>
                    </li>

                </ul>
                <ul class="list-unstyled w-100">
                    <li><router-link to="/client-log-in">Login</router-link>
                    </li>
                    <li><router-link to="/client-register">Register</router-link>
                    </li>
                    <li> <a href="#step">How It Works</a>
                    </li>
                    
                </ul>
            </div>

            <div class="col-lg-4 col-md-12 md-mt-5">
                <ul class="media-icon list-unstyled">
                    <li>Email: <a href="mailto:qualityafreelancers@gmail.com"><b>qualityafreelancers@gmail.com</b></a>
                    </li>
                    <li>Phone: <a href="tel:+254794711950"><b>+254 794711950</b></a>
                    </li>
                    <li>Phone: <a href="tel:+254794711950"><b>+254 794711950</b></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        <div class="secondary-footer">
            <div class="container">
                <div class="copyright">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12"> <span>Copyright &copy; 2023<u> <a
                                        href="#">Quality A</a>.</u> | All Rights Reserved</span>
                        </div>
                        <div class="col-lg-6 col-md-12 text-lg-right md-mt-3">
                            <div class="footer-social">
                                <ul class="list-inline">
                                    <li class="mr-2"><a target="_blank"
                                            href="https://www.facebook.com/Dev.MusunzaFestus"><i
                                                class="fab fa-facebook-f"></i> Facebook</a>
                                    </li>
                                    <li class="mr-2"><a target="_blank"
                                            href="https://twitter.com/musunzafestus"><i class="fab fa-twitter"></i>
                                            Twitter</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!--footer end-->

     <!-- Register Modal -->
     
 <!-- Login Modal -->

    
    <div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div style="display: flex;">
                    <div style="width: 100%">
                        <h5 style="text-align: center; padding:10px" class="modal-title" id="exampleModalLabel">
                            Terms and Policy
                        </h5>
                    </div>
                    <div style="padding-top:10px; padding-right:10px"><i data-dismiss="modal" aria-label="Close"
                            class="fa fa-times"></i>
                    </div>
                </div>

                                    <div class="modal-body">
                    <pre
                        style="text-align: center; font-family: Roboto, sans-serif; white-space: pre-wrap; font-size:15px">1. Private Freelancers
All orders done under the private domain of clients and freelancers are solely their responsibility and doesn&#039;t reflect any activity that involves Quality A</pre>
                </div>
                
            </div>
        </div>
    </div>
</div>

<!-- page wrapper end -->

<!--back-to-top start-->



<!--back-to-top end-->


<!-- inject js start -->


 
</template>

<script>
// @ is an alias to /src
import logInModal from "@/components/core/logInModal.vue";
import registerModal from "@/components/core/registerModal.vue";
export default {
  name: 'HomeView',
  components: {
    logInModal,
    registerModal
  },
  data(){
    return {
        login: null,
        register: null,
        windowWidth: null,
        mobileLogin: null,
    }
  },
  methods: {
    toggleLogin(){
        this.login=!this.login
    },
    toggleRegister(){
        this.register =!this.register
    },
    checkScreen () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
          this.mobileLogin = true;
          return;
        }
        this.mobileLogin = false;
        return;
      }
  },
  created() {
    window.addEventListener("resize", this.checkSreen);
    this.checkScreen();
  }
}
</script>
<style scoped>
ul {
    margin: 25px;
}
</style>
  
 