<template>
    <div class="sidebar">
        <div class="sidebar-brand">
            <img id="logo-img" class="img-center" src="../../assets/client/images/logo.png" alt="" >
        </div>
        <div class="sidebar-menu" style="height: 500px;">
            <ul style="margin-left: 5px;">
               
                <!-- freelancer begin -->
                <li v-if="freelancer||admin">
                    <router-link  to="/freelancer-dashboard" class="active">
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
                <li v-if="freelancer">
                    <div class="active" @click="toggleAvailable">
                    <i class="fa-sharp fa-solid fa-tag"></i>
                    <span>Available</span>
                    <span class="down"><i class="fa-sharp fa-solid fa-angle-down"></i></span>
                    </div>
                    <div v-if="available" class="available">
                    <router-link to="/freelancer/available">New <span>{{ tobebidded_orders.length }}</span></router-link>
                    <router-link to="/freelancer/my-bids">My Bids <span>{{ myBids.length }}</span></router-link>
                    <router-link to="/freelancer/invited">Invited <span>{{ invited.length }}</span></router-link>
                    </div>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/in-progress">
                        <i class="fa-sharp fa-solid fa-pen"></i>
                    <span>In Progress</span>
                    <span class="li-span">{{ incomplete.length }}</span>
                    </router-link>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/in-review">
                        <i class="fa-sharp fa-solid fa-font-awesome"></i>
                    <span>In review</span>
                    <span class="li-span">1</span>
                    </router-link>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/completed"><i class="fa fa-clipboard" aria-hidden="true"></i>
                    <span>Completed</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/on-revision">
                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                    <span>Revision</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/disputed"><i class="fa-sharp fa-solid fa-thumbs-down"></i>
                    <span>Disputed</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li v-if="freelancer">
                    <router-link to="/freelancer/plagiarism-checker"><i class="fa-solid fa-paste"></i>
                    <span>Plagiarism Checker</span>
                    </router-link>
                </li>
                
                <!-- freelancer end -->
                 <!-- admin begin -->

                <li v-if="admin">
                    <router-link to="/admin/clients" >
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <span>Clients</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/admin/all-bids">
                        <i class="fa-solid fa-hand"></i>
                    <span>Bids</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <div @click="toggleAvailable">
                    <i class="fa fa-clipboard" aria-hidden="true"></i>
                    <span>Orders</span>
                    <span class="down"><i class="fa-sharp fa-solid fa-angle-down"></i></span>
                    </div>
                    <div v-if="available" class="available">
                        <router-link to="/admin/received" >Received<span>{{orders.length}}</span></router-link>
                        <router-link to="/admin/fowarded">Fowarded <span>{{ forwarded_orders.length}}</span></router-link>
                    </div>
                </li>
                <li v-if="admin">
                    <router-link to="/admin/transactions">
                        <i class="fa-solid fa-receipt"></i>
                    <span>Transactions</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/admin/accounts"><i class="fa-solid fa-file-invoice"></i>
                    <span>Accounts</span>
                    </router-link>
                </li>
                <li v-if="admin">
                    <router-link to="/administrator"><i class="fa-solid fa-user"></i>
                    <span>Administration</span>
                    </router-link>
                </li>
                <!-- admin end

                client begin -->

            <li v-if="!admin&&!freelancer">
                <router-link to="/client-dashboard" class="active">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span>Dashboard</span>
                </router-link>
            </li>
           
            <li v-if="!admin&&!freelancer">
                <router-link to="/new-order">
                    <i class="fa-solid fa-square-arrow-up-right"></i>
                <span>New Order</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/client/all-orders"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>All Orders</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/client/done">
                    <i class="fa fa-clipboard" aria-hidden="true"></i>
                <span>Done</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/client/incomplete"><i class="fa-solid fa-sort"></i>
                <span>Incomplete</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/client/revision"><i class="fa-solid fa-rotate"></i>
                <span>On Revision</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/client/reviews"><i class="fa-solid fa-square-pen"></i>
                <span>Post a review</span>
                </router-link>
            </li>
            <li v-if="!admin&&!freelancer">
                <router-link to="/chat"><i class="fa-sharp fa-solid fa-comments"></i>
                <span>General Chat</span>
                </router-link>
            </li>
            <li v-if="!admin||!freelancer">
                <router-link to="/faq"><i class="fa-sharp fa-solid fa-question"></i>
                <span>FAQ</span>
                </router-link>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data () {
        return {
            available: null,
            profileMenu: null,
             currentOrder: null,
        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
        ...mapActions(['getOrders']),
        ...mapActions(['getForwardedOrders']),
        ...mapActions(['getTobebiddedOrders']),
        ...mapActions(['getMyBids']),
        ...mapActions(['getInvited']),
        ...mapActions(['getIncomplete'])
    },
    computed: {
    ...mapState(['orders']),
    ...mapState(['forwarded_orders']),
    ...mapState(['tobebidded_orders']),
    ...mapState(['myBids']),
    ...mapState(['invited']),
    ...mapState(['incomplete']),
        admin() {
          return this.$store.state.profileAdmin;
     },
     freelancer() {
          return this.$store.state.profileFreelancer;
    },
    },
    created() {
    this.getOrders();
    this.getForwardedOrders();
    this.getTobebiddedOrders();
    this.getMyBids();
    this.getInvited();
    this.getIncomplete();
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
    list-style-type:none;
    text-decoration: none;
}
/* .scrollable-div {
    height: 500px; 
    overflow: auto; 
  } */
.order-detail{
    margin:10px;
    border-radius:25%;
    background: #f3efef;
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
    margin-left:5px;
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
#nav-toggle{
    display: none;
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