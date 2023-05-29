<template>
    <input type="checkbox" id="nav-toggle">
    <div class="sidebar">
        <div class="sidebar-brand">
            <img id="logo-img" class="img-center" src="@/assets/client/images/logo.png" alt="" >
        </div>
        <div class="sidebar-menu" style="height: 500px;">
            <ul id="navbar" style="margin-left: 5px;">
                <li>
                    <router-link :to="{ name: 'client-view', params: { id: clientId, orderId: clientId } }">
                      <i class="fa-solid fa-user"></i>
                    <span>Profile</span>
                    </router-link>
                </li>
                <!-- freelancer begin -->
                <li>
                    <router-link  to="/freelancer-dashboard">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <span>Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
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
                <router-link :to="{ name: 'admin/incomplete', params: { id: clientId } }">

                        <i class="fa-sharp fa-solid fa-pen"></i>
                    <span>Incomplete</span>
                    <span class="li-span">{{ incomplete.length }}</span>
                    </router-link>
                </li>
                <li >
                <router-link :to="{ name: 'admin/reviews', params: { id: clientId} }">
                        <i class="fa-sharp fa-solid fa-font-awesome"></i>
                    <span>In review</span>
                    <span class="li-span">{{ reviews.length }}</span>
                    </router-link>
                </li>
                <li >
                    <router-link :to="{ name: 'admin/done', params: { id: clientId } }">
                        <i class="fa fa-clipboard" aria-hidden="true"></i>
                    <span>Done</span>
                    <span class="li-span">{{ done_orders.length }}</span>
                    </router-link>
                </li>
                <li >
                <router-link :to="{ name: 'admin/revision', params: { id: clientId} }">
                        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                    <span>Revision</span>
                    <span class="li-span">{{ revision.length }}</span>
                    </router-link>
                </li>
                <li >

             <router-link :to="{ name: 'admin/disputed', params: { id: clientId } }">
                        <i class="fa-sharp fa-solid fa-thumbs-down"></i>
                    <span>Disputed</span>
                    <span class="li-span">{{ disputed.length }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
        <div class="main-content">
               <Header></Header>
            <main>
                <div class="recent-grid ">
                    <div class="card">
                        <div class="card-header">
                            <h2>Disputed</h2>
                        </div>
                        <div class="card-body">
                        <div class="table-responsive">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td>NO:</td>
                                        <td>Order ID</td>
                                        <td>Order Title</td>
                                        <td>Category</td>
                                        <td></td>
                                
                                        
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td> 
                                            <router-link to="/order-view">
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
            </main>
        </div>
</template>


<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import {getDoc, getDocs, doc, getFirestore, collection } from 'firebase/firestore';
export default {
    components: {
        SideBar, 
        Header
    },
    data () {
        return {
            available: null,
            profileMenu: null,
            clientId:  this.$route.params.id,
            done_orders: [],
            disputed: [],
            incomplete: [],
            revision: [],
            reviews: [],
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
  async created() {
        const db = getFirestore();
        const userRef = doc(db, 'users', this.clientId);

        const doneorderRef = collection(userRef, 'done_orders');
        const donesnapshot = await getDocs(doneorderRef);
        const done_orders = donesnapshot.docs.map(doc => doc.data());
        this.done_orders = done_orders;

        const disputedorderRef = collection(userRef, 'disputed');
        const disputedsnapshot = await getDocs(disputedorderRef);
        const disputed = disputedsnapshot.docs.map(doc => doc.data());
        this.disputed = disputed;

        const incompleteorderRef = collection(userRef, 'incomplete');
        const incompletesnapshot = await getDocs(incompleteorderRef);
        const incomplete = incompletesnapshot.docs.map(doc => doc.data());
        this.incomplete = incomplete;

        const revisionorderRef = collection(userRef, 'revision');
        const revisionsnapshot = await getDocs(revisionorderRef);
        const revision = revisionsnapshot.docs.map(doc => doc.data());
        this.revision = revision;

        const reviewsorderRef = collection(userRef, 'reviews');
        const reviewssnapshot = await getDocs(reviewsorderRef);
        const reviews= reviewssnapshot.docs.map(doc => doc.data());
        this.reviews = reviews;

}
 
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
#navbar li a.router-link-exact-active {
    color: #0773f7;
  }
#navbar li a:hover{
color: #0773f7;
}
#navbar li a:hover,
#navbar li a.active{
    color: #0773f7;
}
#navbar li a.active::after,
#navbar li a:hover::after{
    content: "";
    width: 30%;
    height:2px;
    background:  #0773f7;
    position: absolute;
    bottom: -4px;
    left:20px;
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