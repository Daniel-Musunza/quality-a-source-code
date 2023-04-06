<template>
    <input type="checkbox" id="nav-toggle">
    <div class="sidebar">
        <div class="sidebar-brand">
            <img id="logo-img" class="img-center" src="../../assets/client/images/logo.png" alt="" >
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                    <router-link to="/client-dashboard" class="active">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <span>Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="active">
                        <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/new-order">
                        <i class="fa-solid fa-square-arrow-up-right"></i>
                    <span>New Order</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/client/all-orders"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    <span>All Orders</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/client/done">
                        <i class="fa fa-clipboard" aria-hidden="true"></i>
                    <span>Done</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/client/incomplete"><i class="fa-solid fa-sort"></i>
                    <span>Incomplete</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/client/revision"><i class="fa-solid fa-rotate"></i>
                    <span>On Revision</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/client/reviews"><i class="fa-solid fa-square-pen"></i>
                    <span>Post a review</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/chat"><i class="fa-sharp fa-solid fa-comments"></i>
                    <span>General Chat</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/faq"><i class="fa-sharp fa-solid fa-question"></i>
                    <span>FAQ</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="main-content">
        <header>
        <div>
          <h3>
            <label for="nav-toggle">
                <span><i class="fa-solid fa-bars"></i></span>
            </label>
            Dashboard
          </h3>
        </div>
          <div class="search-wrapper">
           <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="search" placeholder="search here" />
          </div>
          
          <div class="user-wrapper">
            <span><i class="fa-sharp fa-solid fa-bell-slash"></i></span>
            <span><i class="fa-sharp fa-solid fa-comment"></i></span>
            <img src="../../assets/images/BuyoneFree_65.jpg" class="img" width="30px" height="30px" alt="">
            <div @click="toggleProfileMenu">
                <h4>Musunza Festus <span class="down"><i class="fa-sharp fa-solid fa-angle-down"></i></span></h4>
                <small>Super admin</small>
            </div>
          </div>
          <div v-if="profileMenu " class="profile-menu">
            <div class="info">
              <div class="right">
                <router-link to="/"><i class="fa-regular fa-user" ></i>View Profile</router-link>
                
                <hr>
                <br>
                <router-link to="/"> <i class="fa-solid fa-user-group"></i>Switch Account</router-link>
                <hr>
                <br>
                <router-link to="/"><i class="fa-solid fa-user-lock"></i>Logout</router-link>
                <br>
              </div>
            </div>
          </div> 
        </header>
        <main>
            <section id="reviews" class="service pos-r bg-effect o-hidden">
                <div style="display: flex; flex-direction: column; text-align: center;">
                    <h2> Post a Question</h2>
    
                    <div class="editor">
                        <vue-editor :editorOptions="editorSettings" useCustomImageHandler @image-added="imageHandler" />
                      </div>
                </div>
                <div style="text-align: center;">
                    <h2>FAQ?</h2>
                    </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12 md-mt-5 order-lg-1" style="margin-right:10px">
                            <div class="row">
                                <div class="col-lg-6 col-md-6" >
                                    <div class="featured-item style-3" >
                                        <h6>Do you give Discounts to consistent clients?</h6>
                                        <div class="featured-desc">
                                            <p>Loyalty discounts are typically offered to repeat customers to reward their brand appreciation and consistent business. we offer these discounts in the form of complementary rewards programs, we also offer them in exchange for paid subscriptions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6" >
                                    <div class="featured-item style-3" >
                                        <h6>Do you give Discounts to consistent clients?</h6>
                                        <div class="featured-desc">
                                            <p>Loyalty discounts are typically offered to repeat customers to reward their brand appreciation and consistent business. we offer these discounts in the form of complementary rewards programs, we also offer them in exchange for paid subscriptions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6" >
                                    <div class="featured-item style-3" >
                                        <h6>Do you give Discounts to consistent clients?</h6>
                                        <div class="featured-desc">
                                            <p>Loyalty discounts are typically offered to repeat customers to reward their brand appreciation and consistent business. we offer these discounts in the form of complementary rewards programs, we also offer them in exchange for paid subscriptions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6" >
                                    <div class="featured-item style-3" >
                                        <h6>Do you give Discounts to consistent clients?</h6>
                                        <div class="featured-desc">
                                            <p>Loyalty discounts are typically offered to repeat customers to reward their brand appreciation and consistent business. we offer these discounts in the form of complementary rewards programs, we also offer them in exchange for paid subscriptions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                         
                        
                    </div>
                </div>
                
            </section>
        </main>
    </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
export default {
    components: {
        SideBar, 
        Header
    },
    data () {
        return {
            available: null,
            profileMenu: null,

        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
    }
}
</script>


<style scoped>
 :root {
    --main-color:#fff;
    --color-dark:#02060b;
    --text-grey:#999999;
}
* {
    padding:0;
    margin: 0;
    box-sizing: border-box;
    list-style-type:none;
    text-decoration: none;
   font-family: 'Heebo', sans-serif;;
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
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    z-index: 100;
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
    font-size: 20px;
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
.search-wrapper {
    border:1px solid #ccc;
    border-radius: 30px;
    height: 50px;
    display: flex;
    align-items: center;
    overflow: none;
    width: 300px;
    margin-right: 50px;
}
.search-wrapper  span{
    display: inline-block;
    padding: 0rem 1rem;
    font-size:1.5 rem;
}
.search-wrapper input{
    height: 100%;
    padding: .5rem;
    border: none;
    outline: none;
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
.recent-grid {
    margin-top: 3.5rem;
    /* display: grid;
    grid-template-columns: 70% auto; */
}
.card{
   background: #fff; 
   width: 100%;
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
table {
    border-collapse:collapse;
}
thead tr {
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}
thead td {
    font-weight: 700;
}
td {
    padding: .5rem 1rem;
    font-size: 15px;
    color: #222;
   
}
td i {
    color: #1c68c4;
    padding-right: 1rem;
}
.table-responsive {
    width: 100%;
    overflow-x: auto;
}
.customer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .7rem;
}
.info {
    display: flex;
    align-items: center;
}
.info img {
    border-radius: 50%;
    margin-right: 1rem;
}
.info h4 {
    font-size: .8rem;
    font-weight: 700;
    color: #222;

}
.info small {
    font-weight: 600;
    color: var(--text-grey);
}
.contact span {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: .5rem;
    color: #1c68c4;
}
textarea {
    border-radius: 10px;
    display:auto;
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