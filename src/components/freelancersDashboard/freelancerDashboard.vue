<template>
    <input type="checkbox" id="nav-toggle">
        <SideBar></SideBar>
        <div class="main-content">
             <Header></Header>
            <main>
                <div class="cards">
                    <!-- admin begin -->
                    <router-link to="/admin/clients" v-if="admin" class="card-single">
                        <div>
                            <h1>54</h1>
                            <span>Clients</span>
                        </div>
                        <div>
                            <span > <i class="fa fa-users" aria-hidden="true"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/admin/complete-orders" v-if="admin" class="card-single">
                        <div>
                            <h1>{{ complete_orders.length }}</h1>
                            <span>Complete Orders</span>
                        </div>
                        <div>
                            <span ><i class="fa-solid fa-file"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/admin/incomplete-orders" v-if="admin" class="card-single">
                        <div>
                            <h1>{{ incomplete_orders.length }}</h1>
                            <span>Incomplete Orders</span>
                        </div>
                        <div>
                            <span > <i class="fa fa-clipboard" aria-hidden="true"></i></span>
                        </div>
                    </router-link>
                    <div class="card-single" v-if="admin">
                        <div>
                            <h1>$6k</h1>
                            <span>Income</span>
                        </div>
                        <div>
                            <span ><i class="fa-solid fa-wallet"></i></span>
                        </div>
                    </div>
                    <router-link to="/admin/freelancers" v-if="admin" class="card-single">
                        <div>
                            <h1>24</h1>
                            <span>Freelancers</span>
                        </div>
                        <div>
                            <span > <i class="fa fa-users" aria-hidden="true"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/admin/revisions" v-if="admin" class="card-single">
                        <div>
                            <h1>0</h1>
                            <span>Orders in Revision</span>
                        </div>
                        <div>
                            <span ><i class="fa-solid fa-rotate"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/admin/unpaid-orders" v-if="admin" class="card-single">
                        <div>
                            <h1>4</h1>
                            <span> Unpaid Orders</span>
                        </div>
                        <div>
                            <span ><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/admin/suspended-freelancers" v-if="admin" class="card-single">
                        <div>
                            <h1>0</h1>
                            <span>Suspended Freelancers</span>
                        </div>
                        <div>
                            <span > <i class="fa fa-users" aria-hidden="true"></i></span>
                        </div>
                    </router-link>

                    <!-- admin end -->

                    <!-- freelacer begin -->
                    <router-link to="/freelancer/available" v-if="freelancer" class="card-single">
                        <div>
                            <h1>{{ tobebidded_orders.length }}</h1>
                            <span>Available</span>
                        </div>
                        <div>
                            <span > <i class="fa-sharp fa-solid fa-tag"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/in-progress" v-if="freelancer" class="card-single">
                        <div>
                            <h1>{{ incomplete.length }}</h1>
                            <span>In Progress</span>
                        </div>
                        <div>
                            <span > <i class="fa-sharp fa-solid fa-pen"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/in-review" v-if="freelancer" class="card-single">
                        <div>
                            <h1>{{ inReview.length }}</h1>
                            <span>In Review</span>
                        </div>
                        <div>
                            <span > <i class="fa-sharp fa-solid fa-font-awesome"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/completed" v-if="freelancer" class="card-single">
                        <div>
                            <h1>{{ done_orders.length }}</h1>
                            <span>Done</span>
                        </div>
                        <div>
                            <span ><i class="fa fa-clipboard" aria-hidden="true"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/on-revision" v-if="freelancer" class="card-single">
                        <div>
                            <h1>0</h1>
                            <span>Revision</span>
                        </div>
                        <div>
                            <span > <i class="fa-sharp fa-solid fa-pen-to-square"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/disputed" v-if="freelancer" class="card-single">
                        <div>
                            <h1>0</h1>
                            <span>Disputed</span>
                        </div>
                        <div>
                            <span ><i class="fa-sharp fa-solid fa-thumbs-down"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/pending-payment" v-if="freelancer" class="card-single">
                        <div>
                            <h1> $ 0</h1>
                            <span>Pending Payment</span>
                        </div>
                        <div>
                            <span ><i class="fa-sharp fa-solid fa-wallet"></i></span>
                        </div>
                    </router-link>
                    <router-link to="/freelancer/total-paid" v-if="freelancer" class="card-single">
                        <div>
                            <h1>$ 0</h1>
                            <span>total Paid</span>
                        </div>
                        <div>
                            <span ><i class="fa-sharp fa-solid fa-wallet"></i></span>
                        </div>
                    </router-link>
                    <!-- freelancer end -->
                </div>

                <!-- admin begin -->
                <div v-if="admin" class="recent-grid2 ">
                    <div class="projects">
                        <div class="card">
                            <div class="card-header">
                                <h2>Recent Orders Received</h2>
                                <router-link to="/admin/received">
                                <button>See all <span><i class="fa-solid fa-arrow-right"></i></span></button>
                            </router-link>
                            </div>
                            <div class="card-body">
                            <div class="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>No:</td>
                                            <td>Project Title</td>
                                            <td>Category</td>
                                            <td>Budget ($)</td>
                                            <td>Due time</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  
                                        v-for="(order, index) in orders"
                                        :key="order.id"
                                        >
                                            <td>{{index +1 }}</td>
                                                <td>{{order.orderTitle}}</td>
                                         
                                                <td>{{order.orderCategory}}</td>
                                                <td>
                                                    {{order.budget}}
                                                </td>
                                                <td>{{order.dueDate}}, {{order.dueTime}}</td>
                                                <td> 
                                             <router-link :to="{ name: 'order-view', params: {id: order.id}}">
                                                    View Details
                                            </router-link>
                                            </td>
                                           
                                        </tr>
                               
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div class="customers">
                        <div class="card-header">
                            <h5>New Freelancer</h5>
                            <router-link to="/admin/freelancers">
                            <button>See all <span><i class="fa-solid fa-arrow-right"></i></span></button>
                        </router-link>
                        </div>
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                    <img src="images/BuyoneFree_65.jpg" class="img" width="40px" height="40px" alt="">
                                    <div>
                                        <h5> Musunza festus</h5>
                                        <small>SEO Expert</small>
                                    </div>
                                </div>
                                <div class="contact">
                                <span><i class="fa-solid fa-circle-user"></i></span>
                                <span><i class="fa-solid fa-comment"></i></span>
                                <span><i class="fa-solid fa-phone"></i></span>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="images/BuyoneFree_65.jpg" class="img" width="40px" height="40px" alt="">
                                    <div>
                                        <h5> Musunza festus</h5>
                                        <small>SEO Expert</small>
                                    </div>
                                </div>
                                <div class="contact">
                                <span><i class="fa-solid fa-circle-user"></i></span>
                                <span><i class="fa-solid fa-comment"></i></span>
                                <span><i class="fa-solid fa-phone"></i></span>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="images/BuyoneFree_65.jpg" class="img" width="40px" height="40px" alt="">
                                    <div>
                                        <h5> Musunza festus</h5>
                                        <small>SEO Expert</small>
                                    </div>
                                </div>
                                <div class="contact">
                                <span><i class="fa-solid fa-circle-user"></i></span>
                                <span><i class="fa-solid fa-comment"></i></span>
                                <span><i class="fa-solid fa-phone"></i></span>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="images/BuyoneFree_65.jpg" class="img" width="40px" height="40px" alt="">
                                    <div>
                                        <h5> Musunza festus</h5>
                                        <small>SEO Expert</small>
                                    </div>
                                </div>
                                <div class="contact">
                                <span><i class="fa-solid fa-circle-user"></i></span>
                                <span><i class="fa-solid fa-comment"></i></span>
                                <span><i class="fa-solid fa-phone"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- admin end -->

                <!-- freelancer begin -->
                <div v-if="freelancer" class="recent-grid ">
                    <div class="projects">
                        <div class="card">
                            <div class="card-header">
                                <h2>Recent Transactions</h2>
                                <router-link to="/freelancer/total-paid">
                                <button>See all <span><i class="fa-solid fa-arrow-right"></i></span></button>
                                </router-link>
                            </div>
                            <div class="card-body">
                            <div class="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Date</td>
                                            <td>Amount($)</td>
                                            <td>Balance ($)</td>
                                            <td>Description</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>03/14/2022 2:33 p.m.</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>
                                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                                payment for Order 4536663
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03/14/2022 2:33 p.m.</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>
                                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                                payment for Order 4536663
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03/14/2022 2:33 p.m.</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>
                                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                                payment for Order 4536663
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03/14/2022 2:33 p.m.</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>
                                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                                payment for Order 4536663
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03/14/2022 2:33 p.m.</td>
                                            <td>10</td>
                                            <td>15</td>
                                            <td>
                                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                                payment for Order 4536663
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- freelancer end -->
            </main>
        </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import { mapState, mapActions } from 'vuex';
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
        ...mapActions(['getOrders']),
         ...mapActions(['getTobebiddedOrders']),
         ...mapActions(['getIncompleteOrders']),
         ...mapActions(['getCompleteOrders']),
         ...mapActions(['getDoneOrders']),
         ...mapActions(['getIncomplete']),
    },
    computed: {
        admin() {
          return this.$store.state.profileAdmin;
        },
        freelancer() {
            return this.$store.state.profileFreelancer;
        },
        ...mapState(['orders']),
        ...mapState(['tobebidded_orders']),
        ...mapState(['incomplete_orders']),
        ...mapState(['complete_orders']),
        ...mapState(['done_orders']),
        ...mapState(['incomplete']),
        ...mapState(['inReview'])
  },

  created() {
    this.getOrders();
    this.getTobebiddedOrders();
    this.getIncompleteOrders();
    this.getCompleteOrders();
    this.getDoneOrders();
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
.card-single div:hover::after{
    background: #1c68c4;
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
table {
    border-collapse:collapse;
}
thead tr {
    border: 1px solid #1c68c4;
}
tbody tr{
    border: 1px solid #1c68c4;
    width:100%;
}
thead td {
    font-weight: 700;
}
td {
    padding: .5rem 1rem;
    font-size: 15px;
    color: #222;
    border: 1px solid #1c68c4;
   
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
.info h5 {
    font-size: 1.2rem;
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
    
    color: #1c68c4;
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
    .recent-grid2{
        grid-template-columns: 60% 40%;
    }
 }
 @media only screen and (max-width: 768px) {
    .cards  {
        grid-template-columns:repeat(2, 1fr);
    }
    .recent-grid ,
    .recent-grid2 {
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