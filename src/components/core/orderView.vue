<template>
    <input type="checkbox" id="nav-toggle">
        <SideBar/>
        <div class="main-content">
            <Header></Header>
            <main>
                <div class="content-wrapper">
                    <div class="content-body">
              <div class="row">
                  <div class="col-md-9">
                      
              <div class="order-body-card">
                  <div class="card">
                      <div class="card-header" >
                          
                          <!-- Freelancer should not see -->
                          <router-link :to="{ name: 'client-view', params: {id: userData.id}}" class="employer-div" v-if="admin">
                              <div class="employer-img">
                                  <div style="border-radius: 38%; background: #808080; height: 60px; width: 60px; display: flex; justify-content:center;" >
                                      <span style="weight: 700; margin-left:5px; font-size: 30px" >CL</span>
                                      <i class="employer-online" id="online-body-badge"></i>
                                  </div>
                              </div>
                              <div>
                                <span class="h5">
                                    <h3> 
                                        <div v-if="!userData">
                                        Loading...
                                        </div>
                                        <div v-else>
                                        {{ userData.firstName }} {{ userData.lastName }}
                                        </div>


                                    </h3>
                                </span>

                                  <div id="body-employer-rating" style="font-size: 15px;">
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
                        </router-link>
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
                              <h3>Attached files </h3>
                          </div>
                          <div class="files-area">
                                              
                            <p>
                            <i class="icon-doc"></i>
                            <a :href="order.orderCoverFile" download>
                                {{order.orderCoverFileName}}
                            </a>
                            </p>

                              
                          </div>
                      </div>
                      
                  </div>
              </div>
              
              <!-- Request Bid seen by freelancer before it being awarded to someone -->
              <div style="padding-top:1em;">
                  <p><b>Bids:</b> {{order.bids}}</p>
                  <!-- seen by admin only -->
                  <button class="btn btn-info btn-take" v-if="admin" @click.prevent="updateOrder()">
                    Send to freelancers <i class="fa-solid fa-arrow-right"></i>
                </button>
                <!-- upto here -->
                  <button v-if="freelancer" class="btn btn-info btn-take" id="btn-take" data-toggle="modal" data-target="#modal-bidding-form">
                      Request / Bid <i class="fa-solid fa-arrow-right"></i>
                  </button>
              
                  <!-- Bidding Modal -->
                  <div class="modal fade" id="modal-bidding-form" tabindex="-1" role="dialog" aria-labelledby="biddingModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h4 class="modal-title" id="biddingModalLabel"><b>Place your bid</b></h4>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <TheLoader v-show="loading"/>
                              <form id="form-request-order" method="POST">
                                  <input type="hidden" name="csrfmiddlewaretoken" v-model="user">
                                  <div class="modal-body">
                                      <input type="hidden" name="order" v-model="orderid">
                                      <div class="row">
                                          
                                          <div class="col-md-4 form-group">
                                              
                                              <input class="form-control" type="hidden"
                                                  name="cpp" v-model='payment' required>
                                          </div>
                                          
                                      </div>
                                      <div class="form-group">
                                          <label>Message</label>
                                          <textarea class="form-control" v-model="bidtext" name="description" rows="5" required></textarea>
                                      </div>
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn main-light" data-dismiss="modal">Cancel</button>
                                      <button type="submit" @click.prevent="placeBid()" data-dismiss="modal" id="btn-request" class="btn btn-primary">Place bid</button>
                                  </div>
                              </form>
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
                      <div v-if="admin" class="order-detail">
                          <label class="key-order-detail">Client Budget:</label>
                          <span class="value-order-detail">${{order.budget}}</span>
                      </div>
                      <!-- upto here -->
                      <!-- seen by admin only -->
                      <div v-if="admin" class="order-detail">
                        <label class="key-order-detail">Freelancer:</label>
                        <span class="value-order-detail">{{order.freelancerUsername}}</span>
                    </div>
                    <div v-if="admin" class="order-detail">
                        <label class="key-order-detail">Reviewer:</label>
                        <span class="value-order-detail">{{order.reviewerUsername}}</span>
                    </div>
                                  <!-- upto here -->
                                  <!-- seen by admin and freelancer only -->
                    <div v-if="admin||freelancer" class="order-detail">
                        <label class="key-order-detail">Payment:</label>
                        <span class="value-order-detail">$ {{order.payment}}</span>
                        
                    </div>
                  
                    <!-- upto here -->
                    <div class="order-detail">
                        <label class="key-order-detail">Status:</label>
                        <span class="value-order-detail">{{order.status}}</span>
                        
                    </div>
                    <div class="order-detail">
                        <label class="key-order-detail">Freelancer Ratings:</label>
                        <br>
                        <span class="value-order-detail text-info">
                            <i class="fa rating 
                            fa-star rated"></i>
                            <i class="fa rating 
                            fa-star rated"></i>
                            <i class="fa rating 
                            fa-star rated"></i>
                            <i class="fa rating 
                            fa-star rated"></i>
                            <i class="fa rating 
                            fa-star rated"></i></span>
                    </div>
                    <input v-if="admin" type="number" v-model="payment" name="payment" placeholder="Freelancer Payment" style="border-radius: 5px; width:170px; height: 40px">
                  </div>
              </div>
                  </div>
              </div>
                    </div>
                  </div>
            </main>
        </div>
</template>

<script>
import { getFirestore, doc, updateDoc, collection, getDoc, setDoc, deleteDoc } from "firebase/firestore"; 
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import ModalItem from "@/components/ModalItem";
import TheLoader from "@/components/TheLoader";
import { getAuth} from "firebase/auth";
import { mapState } from 'vuex';
export default {
    components: {
        SideBar, 
        Header,
        ModalItem,
        TheLoader,
    },
    data () {
        return {
            available: null,
            profileMenu: null,
            userData: null,
             payment: null,
             bidtext: null,
             loading: null,
        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
     
        async updateOrder() {
            const orderId = this.order.id;
            const payment = this.payment;
            this.loading = true;
                try {
                    const db = getFirestore();
                    // Update the payment field in the current order document
                    const orderRef = doc(db, "orders", orderId);
                    await updateDoc(orderRef, { payment });

                    // Push the updated order document to the "forwarded_orders" collection
                    const tobebiddedOrdersCollectionRef = collection(db, "tobebidded_orders");
                    const tobebiddedOrderRef = doc(tobebiddedOrdersCollectionRef, orderId);
                    await setDoc(tobebiddedOrderRef, {
                    ...this.order,
                    payment,
                    status: "inprogress",
                    date: new Date()
                    });

                    // Delete the current order document from the "orders" collection
                    await deleteDoc(orderRef);
                    this.loading = false;
                    console.log("Order sent to be bidded successfully!");
                    this.$router.push("/admin/all-bids");
                } catch (error) {
                    this.loading = false;
                    console.error("Error forwarding order:", error);
                }
            this.payment = null;
        },
        async placeBid() {
            const orderId = this.order.id;
            const bidtext = this.bidtext;
            this.loading = true;
            try {
                const db = getFirestore();
                const auth = getAuth();
                const userRef = doc(db, 'users', auth.currentUser.uid)
                
                // Update the payment field in the current order document
                const orderRef = doc(db, "tobebidded_orders", orderId);
                const myBidsCollectionRef = collection(userRef, "myBids");
                const myBidsOrderRef = doc(myBidsCollectionRef, orderRef.id);
                await setDoc(myBidsOrderRef, {
                ...this.order,
                bidtext,
                date: new Date()
                },
            
                console.log("successfully!")
                );
                
                const bidsRef = collection(orderRef, 'bids');
                const newOrderRef = doc(bidsRef, userRef.id);
                await setDoc(newOrderRef, {
                    freelancer: userRef.id,
                    bidtext,
                    date: new Date()
                });

                this.loading = false;
                alert("Order bidded successfully!");
                await this.$store.dispatch("getBids");
                this.$router.push("/freelancer/my-bids");
            } catch (error) {
                this.loading = false;
                console.error("Error bidding order:", error);
            }
            this.bidtext = null;
}

  },

    computed: {
        admin() {
          return this.$store.state.profileAdmin;
     },
     freelancer() {
          return this.$store.state.profileFreelancer;
    },
    reviewer() {
          return this.$store.state.profileReviewer;
    },
    ...mapState(['orders']),
    ...mapState(['forwarded_orders']),
    ...mapState(['tobebidded_orders']),
    order () {
    const orderId = this.$route.params.id;
    const order = this.orders.find(order => order.id === orderId);
    const forwarded = this.forwarded_orders.find(order => order.id === orderId);
    const tobebidded = this.tobebidded_orders.find(order => order.id === orderId);
    if (order) {
        return order;
    } else if (forwarded) {
        return forwarded;
    } else if (tobebidded) {
        return tobebidded;
    }
    },

    },
async created() {
  if (this.order) {
    const firestore = getFirestore();
    const userRef = doc(collection(firestore, "users"), this.order.client);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot.data();
    this.userData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      id: userData.id,
    };
  }


},
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