<template>
    <input type="checkbox" id="nav-toggle">
   <SideBar></SideBar>
    <div class="main-content" >
        <Header>
        </Header>
      
                        <form class="form" action=""  >
                           
                                <h4 style="margin-top: 100px; text-align: center;">Welcome Our Beloved Client</h4>
                                <p style="text-align: center; padding: 20px;">Kindly give Detailed instructions to Ensure Quality work</p>
                            
                            <TheLoader v-show="loading" />
                            <div class="container" >
                                <div :class="{ invisible: !error }" class="err-message">
                                    <p><span>Error:</span>{{ this.errorMsg }}</p>
                                </div>
                                    <div class="row">
                                        <div class="col" >
                                            <input type="hidden" name="_token" > 
                                            <h5>Order Title</h5>                          
                                            <fieldset class="form-group position-relative has-icon-left">
                                                <input type="text"
                                                    class="form-control form-control-lg input-lg "
                                                    placeholder="Write a title for your job post" required v-model="orderTitle">
                                                <div class="form-control-position">
                                                    <i class="ft-user"></i>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col">
                                            <div class="pd-right">
                                                <div class="form-group">
                                                    <h5>Order Category</h5> 
                                                    <select name="field" class="form-control form-control-lg input-lg" required  v-model="orderCategory">
                                                        <option value="Writing">Writing</option>
                                                        <option value="Graphic Design">Graphic Design</option>
                                                        <option value="Web development">Website Development</option>
                                                        <option value="Mobile app development">Mobile App Development</option>
                                                        <option value="Data Science">Data Science</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex; flex-direction: column; width: 100%s;">
                                        <h5>Instructions to Freelancer</h5>

                                        <div class="editor">
                                            <vue-editor  v-model="orderHTML" :editorOptions="editorSettings" useCustomImageHandler @image-added="imageHandler" />
                                          </div>
                                    </div>
                                    <div class="row align-items-start">
                                        <div class="col">
                                            <div class="form-group">
                                                <h5>Further Instructions (please combine all instructions in a single file)</h5>
                                                <input type="file"  ref="orderFile" id="order-file" @change="fileChange"  name="avatar" class="form-control">
                                            </div>
                                            <h5>Due Time</h5>                          
                                            <!-- <fieldset class="form-group position-relative has-icon-left"> -->
                                            <input type="date"
                                                class="form-control form-control-lg input-lg "
                                             v-model="dueDate">
                                                <input type="time"
                                                class="form-control form-control-lg input-lg "
                                                v-model="dueTime" required>
                                            <div class="form-control-position">
                                                <i class="ft-user"></i>
                                            </div>
                                        </div>
                                        <div class="col" >
                                            <div>
                                                <h5>What level of experience will it need?</h5>                          
                                                <div class="form-check" >
                                                    <input value="entry" v-model="experienceNeeded" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Entry
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input value="intermediate" v-model="experienceNeeded" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Intermediate
                                                    </label>
                                                </div>
                                                <div class="form-check" >
                                                    <input value="expert" v-model="experienceNeeded" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                                    <label class="form-check-label" for="flexRadioDefault3">
                                                        Expert
                                                    </label>
                                                </div>
                                            </div>
                                            <div  style="display: flex; flex-direction: column;">
                                                <h5>Tell us about your Budget. </h5>
                                                <div>
                                                <span style="font-size: x-large; color: blue;"> $</span>
                                                <input type="number" v-model="budget" name="budget" style="border-radius: 5px; width:100px; height: 40px"> 
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                <button type="submit" @click.prevent="postOrder()" class="btn blue-bg btn-lg btn-block" id="send-btn"  style=" background-color:#79aae6; margin-top: 20px; margin-bottom: 30px;">
                                    Post
                                </button>
                            </div>
                        </form>
    </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import TheLoader from "@/components/TheLoader";
import {getFirestore}  from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { getStorage ,ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { addDoc,orderBy,limit, getDocs, collection, setDoc, doc} from "firebase/firestore"; 

import Quill from "quill";
    window.Quill = Quill;
    const ImageResize = require("quill-image-resize-module").default;
    Quill.register("modules/imageResize", ImageResize);
export default {
    components: {
        SideBar, 
        Header,   
        TheLoader
      },
    data () {
        return {
         file: null,
          error: null,
          errorMsg: null,
          loading: null,
            available: null,
            profileMenu: null,
            editorSettings: {
            modules: {
              imageResize: {},
            },
          },

        }
    },
    methods: {
        toggleAvailable(){
            this.available= !this.available
        },
        toggleProfileMenu(){
            this.profileMenu= !this.profileMenu
        },
       fileChange() {
            if (this.$refs.orderFile && this.$refs.orderFile.files.length > 0) {
                this.file = this.$refs.orderFile.files[0];
                const fileName = this.file.name;
                this.$store.commit("orderFileNameChange", fileName);
                this.$store.commit("createOrderFileURL", URL.createObjectURL(this.file));
            }else {
                console.log("no file");
            }
         },
        imageHandler(file, Editor, cursorLocation, resetUploader) {
          const storageRef = getStorage().ref();
          const docRef = storageRef.child(`documents/orderImages/${file.name}` );
          docRef.put(file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              Editor.insertEmbed(cursorLocation, "image", downloadURL);
              resetUploader();
            }
          );
        },
        async postOrder() {
          if (this.orderTitle.length !== 0 && this.orderHTML.length !== 0) {
            this.loading = true;
            if (this.file) {
             
               this.loading = true;
                const storage = getStorage();
                const storageRef = ref(
                storage,
                `documents/orderFiles/${this.$store.state.orderFileName}`
                );
                const uploadTask = uploadBytesResumable(storageRef, this.file);
                uploadTask.on(
                "state_changed",
                (snapshot) => {
                    console.log(snapshot);
                },
                (err) => {
                    console.log(err);
                    this.loading = false;
                },
                async () => {
                  const downloadURL = await getDownloadURL(storageRef);
                  const db = getFirestore();
                  const timestamp = await Date.now();

                  const auth = getAuth();
                  let orderID = 1000;

                    const querySnapshot = await getDocs(collection(db, "orders"), orderBy("id", "desc"), limit(1));
                    
                    if (!querySnapshot.empty) {

                        const mostRecentOrder = querySnapshot.docs[querySnapshot.docs.length - 1].data();
                            // Get the maximum orderID in the database and parse it as an integer
                        const maxOrderID = parseInt(mostRecentOrder.id);
                        orderID = maxOrderID + 1; 
                    }




                const userRef = doc(db, 'users', auth.currentUser.uid);
                const client = auth.currentUser.uid;

                const ordersCollectionRef = collection(db, "orders");
                const orderRef = doc(ordersCollectionRef, orderID.toString());
                await setDoc( orderRef,{
                     orderCoverFile: downloadURL,
                     orderCoverFileName: this.$store.state.orderFileName,
                        client: client,
                        id: orderID.toString(),
                        orderHTML: this.orderHTML,
                        orderTitle: this.orderTitle,
                        orderCategory: this.orderCategory,
                        experienceNeeded: this.experienceNeeded,
                        status: "incomplete",
                        budget: this.budget,
                        dueTime: this.dueTime,
                        dueDate: this.dueDate,
                        
                        date: timestamp,
                        
                    });

                 
                  const ordersRef = collection(userRef, 'orders');
                  const newOrderRef = doc(ordersRef, orderID.toString());
                    await setDoc(newOrderRef, {
                        // id: newOrderRef.id,
                        id: orderID.toString(),
                        orderCoverFile: downloadURL,
                        orderCoverFileName: this.$store.state.orderFileName,
                        orderHTML: this.orderHTML,
                        orderTitle: this.orderTitle,
                        orderCategory: this.orderCategory,
                        experienceNeeded: this.experienceNeeded,
                        status: "incomplete",
                        budget: this.budget,
                        dueTime: this.dueTime,
                        dueDate: this.dueDate,
                        date: timestamp,
                    });

               
                
                  await this.$store.dispatch("getClientOrders");
                  this.loading = false;
                  this.$router.push("/client/all-orders");
               
                }
              );
              return;
            }
            else {
            const db = getFirestore();
            const auth = getAuth();
            const timestamp = Date.now(); // Removed "await" since Date.now() is synchronous

            // Declare orderID outside of the if-else block

            // ...
            let orderID = 1000;

            const querySnapshot = await getDocs(collection(db, "orders"), orderBy("id", "desc"), limit(1));

            if (!querySnapshot.empty) {

                const mostRecentOrder = querySnapshot.docs[querySnapshot.docs.length - 1].data();
                    // Get the maximum orderID in the database and parse it as an integer
                const maxOrderID = parseInt(mostRecentOrder.id);
                orderID = maxOrderID + 1; 
            }

            const userRef = doc(db, "users", auth.currentUser.uid);
            const client = auth.currentUser.uid;
            const ordersCollectionRef = collection(db, "orders");
            const orderRef = doc(ordersCollectionRef, orderID.toString());

            await setDoc(orderRef, {
                client: client,
                id: orderID.toString(),
                orderHTML: this.orderHTML,
                orderTitle: this.orderTitle,
                orderCategory: this.orderCategory,
                experienceNeeded: this.experienceNeeded,
                status: "pending",
                budget: this.budget,
                dueTime: this.dueTime,
                dueDate: this.dueDate,
                date: timestamp,
            });

            const ordersRef = collection(userRef, "orders");
            const newOrderRef = doc(ordersRef, orderID.toString());

            await setDoc(newOrderRef, {
                id: orderID.toString(),
                orderHTML: this.orderHTML,
                orderTitle: this.orderTitle,
                orderCategory: this.orderCategory,
                experienceNeeded: this.experienceNeeded,
                status: "pending",
                budget: this.budget,
                dueTime: this.dueTime,
                dueDate: this.dueDate,
                date: timestamp,
            });

            await this.$store.dispatch("getClientOrders");
            this.loading = false;
            this.$router.push("/client/all-orders");

            return;
            }


            
          }
          this.error = true;
          this.errorMsg = "Please ensure all fields necessary have been filled!";
          setTimeout(() => {
            this.error = false;
          }, 5000);
          return;
        },
    },
    computed: {
        profileId() {
          return this.$store.state.profileId;
        },
        orderFileName() {
          return this.$store.state.orderFileName;
        },
        orderTitle: {
          get() {
            return this.$store.state.orderTitle;
          },
          set(payload) {
            this.$store.commit("updateOrderTitle", payload);
          },
        },
        orderCategory: {
          get() {
            return this.$store.state.orderCategory;
          },
          set(payload) {
            this.$store.commit("updateOrderCategory", payload);
          },
        },
        dueDate: {
          get() {
            return this.$store.state.dueDate;
          },
          set(payload) {
            this.$store.commit("updatedueDate", payload);
          },
        },
        dueTime: {
          get() {
            return this.$store.state.dueTime;
          },
          set(payload) {
            this.$store.commit("updatedueTime", payload);
          },
        },
        orderHTML: {
          get() {
            return this.$store.state.orderHTML;
          },
          set(payload) {
            this.$store.commit("newOrderPost", payload);
          },
        },
        budget: {
          get() {
            return this.$store.state.budget;
          },
          set(payload) {
            this.$store.commit("updateBudget", payload);
          },
        },
        experienceNeeded: {
          get() {
            return this.$store.state.experienceNeeded;
          },
          set(payload) {
            this.$store.commit("updateExperienceNeeded", payload);
          },
        },
        user() {
          return this.$store.state.user;
       },
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
    padding:0;
    margin: 0;
    box-sizing: border-box;
    list-style-type:none;
    text-decoration: none;
   font-family: 'Heebo', sans-serif;;
    
}
.form{
   width:80%;
   align-content: center;
}
p{
    color:#1c68c4;
}
.row{
    align-items: center;
    display: flex;
    flex-direction: row;
}
.col{
    width:38%;
    margin: 10px;
}
h5{
    margin-bottom: 20px;
}
.form-check-label{
    margin-left:20px;
    margin-bottom:20px;
}
.form-check{
    margin-left:20px;
}
.editor {
    height:60vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width:100%;
  }
  .quillWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
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
    .row{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin:0px;
    }
    .col{
        width:100%;
        margin:0px;
    }
    .form{
        width:100%;
        margin:0px;
    }
    .editor{
        width:100%;
    }
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