<template>
<input type="checkbox" id="nav-toggle">
   <SideBar></SideBar>

    <div class="container">
      <div>
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
import { getFunctions, httpsCallable } from "firebase/functions";
    import { functions } from "@/firebase";
          export default {
            name: "AdministratorPage",
            components: {
        SideBar, 
    
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
        margin-left: 200px;
        position: absolute;
        display: flex;
        justify-content: center;
        /* max-width: fit-content; */
      }
      h2 {
        font-weight: 500;
        text-align: center;
      }
      @media (min-width: 577px){
        .container {
          margin-left: 0;
          position: relative;
        }
      }

      
    </style>