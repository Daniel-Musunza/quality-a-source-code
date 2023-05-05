

<template>
    <input type="checkbox" id="nav-toggle">
    <div class="sidebar">
        <div class="sidebar-brand">
            <img id="logo-img" class="img-center" src="@/assets/client/images/logo.png" alt="" >
        </div>
        <div class="sidebar-menu" style="height: 500px;">
            <ul style="margin-left: 5px;">
               
                <!-- freelancer begin -->
                <li>
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
               <!-- <li>
                    <router-link to="/client-view">
                      <i class="fa-solid fa-user"></i>
                    <span>Profile</span>
                    </router-link>
                </li> -->
               <li >
                    <router-link to="/freelancer/in-progress">
                        <i class="fa-sharp fa-solid fa-pen"></i>
                    <span>In Progress</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li >
                    <router-link to="/freelancer/in-review">
                        <i class="fa-sharp fa-solid fa-font-awesome"></i>
                    <span>In review</span>
                    <span class="li-span">1</span>
                    </router-link>
                </li>
                <li >
                    <router-link to="/freelancer/completed"><i class="fa fa-clipboard" aria-hidden="true"></i>
                    <span>Done</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li >
                    <router-link to="/freelancer/on-revision">
                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                    <span>Revision</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
                <li >
                    <router-link to="/freelancer/disputed"><i class="fa-sharp fa-solid fa-thumbs-down"></i>
                    <span>Disputed</span>
                    <span class="li-span">0</span>
                    </router-link>
                </li>
               
                 
                <!-- freelancer end -->
                 <!-- client begin -->
        <!--
            <li >
                <router-link to="/client/all-orders"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>All Orders</span>
                </router-link>
            </li>
            <li >
                <router-link to="/client/done">
                    <i class="fa fa-clipboard" aria-hidden="true"></i>
                <span>Completed</span>
                </router-link>
            </li>
            <li >
                <router-link to="/client/incomplete"><i class="fa-solid fa-sort"></i>
                <span>Incomplete</span>
                </router-link>
            </li>
            <li >
                <router-link to="/client/revision"><i class="fa-solid fa-rotate"></i>
                <span>On Revision</span>
                </router-link>
            </li>
        -->
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
          </h3>
        </div>
        <!-- <div class="search-wrapper">
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
             <input type="search" placeholder="search here" />
           </div> -->
          <div class="user-wrapper" >
            <span><i class="fa-sharp fa-solid fa-bell-slash"></i></span>
            <span><i class="fa-sharp fa-solid fa-comment"></i></span>
         
            <!-- <img src="images/BuyoneFree_65.jpg" class="img" width="30px" height="30px" alt=""> -->
            <div  @click="toggleProfileMenu" class="profile">
                <span style="font-size:20px; padding-left: 25px;">{{ this.$store.state.profileInitials}}</span>
            </div>
            <span  @click="toggleProfileMenu" class="down"><i class="fa-sharp fa-solid fa-angle-down"></i></span>
          </div>
          <div v-if="profileMenu " class="profile-menu">
            <div class="info">
              <div class="right">
                <h4>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}} </h4>
                <small v-show="admin">Super admin</small>
                <small v-show="freelancer">Freelancer</small>
                <small v-show="!freelancer&&!admin">Client</small>
                <hr>
                <br>
               
                <router-link to="/profile-view"><i class="fa-regular fa-user" ></i>View Profile</router-link>
                
                <hr>
                <br>
                <router-link to="/client-log-in"> <i class="fa-solid fa-user-group"></i>Switch Account</router-link>
                <hr>
                <br>
                <div @click="signOut()"><i class="fa-solid fa-user-lock"></i>Logout</div>
                <br>
              </div>
            </div>
          </div> 
        </header>
    <!-- <div class="container"> -->
      <ModalItem v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
        <!-- <img src="../assets/client/images/logo.png" style="height:200px;" class="logo" > -->
          <div class="row">
            <div class="col-md-6 offset-md-3">
            <div class="col-md-12">
              <div>
                <div>
                  <h2>Account Settings</h2>
                  <hr />
                </div>
        
            
                <form>
                 
                  <div class="form-group">
                    <label for="firstName">First Name</label>
                   {{ client.firstName }}
                  </div>
                  <div class="form-group">
                    <label for="lastName" >Last Name</label>
                    {{ client.lastName }}
                  </div>
                  <div class="form-group">
                    <label for="username">Username</label>
                    {{ client.username }}
                  </div>
                  <div class="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    {{ client.phoneNumber }}
                  </div>
                  <div class="form-group">
                    <label for="niche">Niche</label>
                    {{ client.niche }}
                  </div>
                 
                  <div class="form-group">
                    <label for="email" >Email</label>
                    {{ client.email }}
                  </div>
                  
                  <div class="form-group">
                    <label for="email" >Bids</label>
                    <table>
                        <thead>
                        <tr>
                            <td>NO:</td>
                            <td>ID</td>
                            <td>Title</td>

                        </tr>
                        </thead>
                        <tbody>
                       
                            <tr v-for="(bid, index) in bids" :key="bid.id">
                                <td>{{ index + 1 }}</td>
                                <td> {{ bid.id }} </td>
                                <td> {{ bid.orderTitle }}</td>
                            </tr>
                         
                       </tbody>
                    </table>
                  </div>
                  <TheLoader v-show="loading"/>
                  <div class="my-3">
                    <button @click.prevent="assignTask($route.params.id)">Assign Task {{ orderId }}</button>
                  </div>
                </form>
              </div>
             </div>
            </div>
          </div>
    <!-- </div> -->
    </div>
    </template>
    
    <script>

import { getFirestore, doc, collection, setDoc, getDoc, getDocs, deleteDoc} from "firebase/firestore";
import {getAuth} from "firebase/auth";
    import ModalItem from "@/components/ModalItem"
    import TheLoader from "@/components/TheLoader"
   
    export default {
        name: "ProfileView",
        data () {
        return {
            available: null,
            profileMenu: null,
            modalMessage: "Changes were saved!",
            modalActive: false,
            photoAvailable: null,
            client: null,
            bids: [],
            loading: null,
            file: null,
        
          

        }
    },

        components :{
            ModalItem,
            TheLoader,
            // ProfilePhotoPreview
            
        },
     
        methods: {
            toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
          closeModal() {
            this.modalActive = !this.modalActive;
          },
          async assignTask(clientId) {
            this.loading = true;
            try {
                const db = getFirestore();
                const userRef = doc(db, 'users', clientId);

                const ordersRef = collection(userRef, 'myBids');   
                const task = await getDoc(doc(ordersRef, this.orderId));
               
                if (task.exists()) {
                    const tobeAssignedTask = task.data();
                 
                    // rest of the method
                    const invitedCollectionRef = collection(userRef, "invited");
                 
                const invitedOrderRef = doc(invitedCollectionRef, this.orderId);
                await setDoc(invitedOrderRef, {
                    ...tobeAssignedTask,
                    date: new Date(),
                });

                const ordersCollectionRef = collection(db, "forwarded_orders");
                const orderRef = doc(ordersCollectionRef, this.orderId);
                await setDoc( orderRef,{
                    ...tobeAssignedTask,
                    freelancer: clientId,
                    date: new Date(),
                    });

                // // Delete the current order document from the "myBids" collection
                const deleteMyBids = doc(ordersRef, this.orderId);
                await deleteDoc(deleteMyBids);

                // Delete the current order document from the "tobebidded_orders" collection
                const tobebidded_ordersRef = collection(db, 'tobebidded_orders'); 
                const tobebidded_ordersref = doc(tobebidded_ordersRef, this.orderId);
                await deleteDoc(tobebidded_ordersref);

                this.loading = false;
                alert("Order has been assigned successfully!");
                this.$router.push("/admin/all-bids");
                } else {
                    console.error("Error in assigning task: Task does not exist");
                }
            } catch (error) {
                this.loading = false;
                console.error("Error in assigning task:", error);
            }      
        },
        signOut() {
            getAuth().signOut();
            // window.location.reload();
            this.$router.replace('/');
        },
     
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
          orderId () {
        return this.$route.params.orderId
      },
        },
        async created() {
          const db = getFirestore();
          let clientId = this.$route.params.id;
          const clientSnapshot = await getDoc(doc(db, 'users', clientId));
          const clientData = clientSnapshot.data();
            this.client = {
            firstName: clientData.firstName,
            lastName: clientData.lastName,
            email: clientData.email,
            phoneNumber: clientData.phoneNumber,
            
            };


       
            const userRef = doc(db, 'users', clientId);
            const ordersRef = collection(userRef, 'myBids');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              this.bids = querySnapshot.docs.map((doc) => doc.data());
            } catch (error) {
              console.error(error);
            };

          

      }, 

  }
 
    </script>
    
    <style scoped>
    
table {
    border-collapse:collapse;
}
thead tr {
    border: 1px solid #1c68c4;;
}
tbody tr {
    border: 1px solid #1c68c4;;
}
thead td {
    font-weight: 700;
}
td {
    padding: .5rem 1rem;
    font-size: 15px;
    color: #222;
    border: 1px solid #1c68c4;;
   
}
td i {
    color: #1c68c4;
    padding-right: 1rem;
}
.table-responsive {
    width: 100%;
    overflow-x: auto;
}

    label{
        margin-left:10px;
    }
    
    ul {
        list-style-type: none;
       
      }
            h2 {
                text-align: center;
                margin-bottom: 16px;
                font-weight: 300;
                font-size: 32px;
            }
          
.profile {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #303030;
    float: right;
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
            .col-md-12 {
              align-items: center;
            }
            .initials {
                    position: initial;
                    width: 80px;
                    height: 80px;
                    font-size: 32px;
                    background-color: #303030;
                    color: #fff;
                    display: flex;
                    align-self: center;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
            .admin-badge {
                    display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: #303030;
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;
                    width: 30%;
                }
              button {
                display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: #7880f1;
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;
                    width: 40%;
              }
              .initials label {
               font-size: 18px;
               font-weight: 600;
              }
             .edit {
          display: flex;
          color: #7880f1;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          /* background-color: #fff; */
          transition: 0.5s ease all;
         }
         .edit:hover{
          color: #fff;
          background-color: #1cfd07;
         }
         @media (min-width:977px){
        .row {
          align-items:center;
        }
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