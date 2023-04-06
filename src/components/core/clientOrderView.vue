<template>
    <input type="checkbox" id="nav-toggle">
        <SideBar/>
        <div class="main-content">
            <Header></Header>
            <main >
                <div class="content-wrapper">
                    <div class="content-body">
              <div class="row">
                  <div class="col-md-9">
                      
              <div class="order-body-card">
                  <div class="card">
                      <div class="card-header">
                          
                          <!-- Freelancer should not see -->
                          <a href="#" class="employer-div">
                              <div class="employer-img">
                                  <div style="border-radius: 38%; background: #808080; height: 60px; width: 60px; display: flex; justify-content:center;" >
                                      <span style="weight: 700; margin-left:5px; font-size: 30px" >{{this.$store.state.profileInitials}}</span>
                                      <i class="employer-online" id="online-body-badge"></i>
                                  </div>
                              </div>
                              <div style="font-size:15px">
                                
                                  <div id="body-employer-rating">
                                      <i class="fa rating 
                                      fa-star rated"></i>
                                      <i class="fa rating 
                                      fa-star rated"></i>
                                      <i class="fa rating 
                                      fa-star rated"></i>
                                      <i class="fa rating 
                                      fa-star rated"></i>
                                      <i class="fa rating 
                                      fa-star rated"></i>
                                  </div>
                              </div>
                          </a>
                          <!-- upto here-->
              
                          <!-- order topic -->
                          <h4>{{order.orderTitle}}</h4>
                      </div>
                  
                      <div class="card-body">
                          <!-- order body -->
                          <div>
                              <div class="pt-2 scrollable-div " >
                                  <div  v-html="order.orderHTML"></div>
                              </div>
                          </div>
                  
                          
                  
                          <!-- attached files -->
                          <!-- All files -->
              <div>
                  <div class="row" id="files-area">
                      
                      <div class="col-md-4" style="padding-top:1em;">
                          <div>
                              <h3>Attached files</h3>
                          </div>
                          <div class="files-area" style="width:fit-content">
                                              
                                              <p >
                                              <i class="icon-doc"></i>
                                              <a :href="order.orderCoverFile" download>
                                                  {{order.orderCoverFileName}}
                                              </a>
                                              </p>
                  
                                                
                        </div>
                      </div>
                      
                  </div>
              </div>
         
                                  
                              
                  
                          
                      </div>
                  </div>
              </div>
                  </div>
                  <div class="col-md-3">
                      <div class="card">
                  <div class="card-body">
                      <div class="pb-1">
                          <h4>Order detail</h4>
                      </div>
              
                      <div class="order-detail">
                          <label class="key-order-detail">Order ID:</label>
                          <span class="value-order-detail text-info"><b>{{order.orderID}}</b></span>
                      </div>
                      <div class="order-detail">
                          <label class="key-order-detail">Due Time:</label>
                          <span class="value-order-detail text-info"><b>{{order.dueDate}},{{order.dueTime}}</b></span>
                      </div>
                 
                      <div class="order-detail">
                          <label class="key-order-detail">Category:</label>
                          <span class="value-order-detail">{{order.orderCategory}}</span>
                      </div>
                      <div class="order-detail">
                          <label class="key-order-detail">Level of Experience:</label>
                          <span class="value-order-detail">{{order.experienceNeeded}}</span>
                      </div>
                                   <!-- seen by admin and client only -->
                      <div class="order-detail">
                          <label class="key-order-detail">Client Budget:</label>
                          <span class="value-order-detail">${{order.budget}}</span>
                      </div>
                  
                    <div class="order-detail">
                        <label class="key-order-detail">Status:</label>
                        <span class="value-order-detail">{{order.status}}</span>
                        
                    </div>
                    
                  
                  </div>
              </div>
                  </div>
              </div>
              
              
             
              
           
              
              
                    </div>
                  </div>
            </main>
            <!-- <main v-else>nothing</main> -->
        </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import { mapState } from 'vuex'
export default {
    components: {
        SideBar, 
        Header
    },
    data () {
        return {
            available: null,
            profileMenu: null,
            //  currentClientOrder: null,
        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
    },
    computed: {
    ...mapState(['clientOrders']),
    order () {
      return this.clientOrders.find(order => order.id === this.$route.params.id);
    }
  }

// async mounted() {
//     this.currentClientOrder = await this.$store.state.clientOrders.filter((order) => {
//       return order.id === this.$route.params.orderid;
//     })
//     console.log(this.currentClientOrder);
// }


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
.scrollable-div {
    height: 500px; /* Set the height of the div */
    overflow: auto; /* Make it scrollable */
  }
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