<template>
<input type="checkbox" id="nav-toggle">
<SideBar/>
    <div class="main-content">
      <Header></Header>
    <div class="container">
              <div>
                <h2>Administration</h2>
                <hr />
              </div>
             
              <form >
                <div class="form-group">
                  <input
                  placeholder="Enter user email to add a new role"
                  type="text"
                  id="addAdmins"
                  class="form-control"
                  v-model="adminEmail"
                  />
                </div>
                <span>{{this.functionMsg }}</span>
                <div style="display: flex; flex-direction:row; justify-content: center; ">
                <div class="my-3">
                  <button @click.prevent="addAdmin" type="submit" class="btn btn-primary">
                    Add Admin
                  </button>
                </div>
                <div class="my-3">
                  <button @click.prevent="addReviewer" type="submit" class="btn btn-primary">
                    Add Reviewer
                  </button>
                </div>
                <div class="my-3">
                  <button @click.prevent="addFreelancer" type="submit" class="btn btn-primary">
                    Add Freelancer
                  </button>
                </div>
                </div>
              </form>
      </div>  <!-- <Administration /> -->
      </div>
</template>
<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import { getFunctions, httpsCallable } from "firebase/functions";
  export default {
   name: "AdministratorPage",
   components: {
    SideBar, 
    Header,
   },
          
              data() {
                  return {
                      adminEmail: '',
                      functionMsg: null,
                  };
              },
                methods: {
                  async addAdmin() {
                    const functions = getFunctions();
                    const addAdmin = httpsCallable(functions, 'addAdminRole');
                    const result = await addAdmin({ email: this.adminEmail });
                    this.functionMsg = result.data.message;
                  },
                  async addReviewer() {
                    const functions = getFunctions();
                    const addReviewer = httpsCallable(functions, 'addReviewerRole');
                    const result = await addReviewer({ email: this.adminEmail });
                    this.functionMsg = result.data.message;
                  },
                  async addFreelancer() {
                    const functions = getFunctions();
                    const addFreelancer = httpsCallable(functions, 'addFreelancerRole');
                    const result = await addFreelancer({ email: this.adminEmail });
                    this.functionMsg = result.data.message;
                  }
                },
         
          }
      </script>
    <style scoped>
      .container {
      
        background-color: rgb(108, 142, 235);
        /* margin-left: 200px; */
        margin-top: 40px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width:fit-content
        /* max-width: fit-content; */
      }
      h2 {
        font-weight: 500;
        text-align: center;
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
      @media (min-width: 777px){
        .container {
          margin: 10px;
       
        }

    .main-content {
        width: 100%;
        margin-left: 0rem;
    }
    header {
        width: 100% !important;
        left: 0 !important;
        
    }

      }

      
    </style>