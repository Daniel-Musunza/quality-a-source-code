import { createStore } from 'vuex';

import {db} from "../firebase";
import {setDoc, getDocs, doc, getDoc, getFirestore, collection} from 'firebase/firestore';

import { getAuth, onAuthStateChanged} from "firebase/auth";

export default createStore({
  state () {
    return {
      // auth state
      user: {
        loggedIn: false,
        data: null
      },
      profileAdmin: null,
      profileFreelancer: null,
      profileReviewer: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
      profileUsername: null,
      profilePhoneNumber: null,
             
      profileId: null,
      profileInitials: null,

            // orders state
            clientOrders: [],
            orders: [],
            myBids: [],
            forwarded_orders: [],
            tobebidded_orders: [],
            postloaded: null,
            orderHTML: 'write your instructions here...',
            orderTitle: "",
            orderCategory: "",
            orderFileName: "",
            orderFileURL: true,
            dueDate:"",
            dueTime: "",
            experienceNeeded: "",
            budget: "",
            dateSubmited: "",
            freelancerUsername: "",
            clientFirstName: "",
            bids:"",
            status: "",
            payment: "",
            comment: "",
            editPost: null,
    }
  },
  getters: {
    // order getters
orders: state => state.orders,
myBids: state => state.myBids,
forwarded_orders: state => state.forwarded_orders,
tobebidded_orders: state => state.tobebidded_orders,
clientOrders: state => state.clientOrders,
user(state){
  return state.user
},
fullName(state) {
  return `${state.firstName} ${state.lastName}`
},
  },
  mutations: {
      // auth mutations
      updateUser(state, payload){
        state.user = payload;
    },
    setProfileAdmin(state, payload) {
        state.profileAdmin = payload;
        console.log(state.profileAdmin);
    },
    setProfileFreelancer(state, payload) {
      state.profileFreelancer = payload;
      console.log(state.profileFreelancer);
  },
  setProfileReviewer(state, payload) {
    state.profileReviewer = payload;
    console.log(state.profileReviewer);
},
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },

           
            setProfileInfo(state, payload) {
              if (payload) {
                state.profileId = payload.uid;
                state.profileEmail = payload.email;
                state.profileFirstName = payload.firstName;
                state.profileLastName = payload.lastName;
                state.profilePhoneNumber = payload.phoneNumber;
              } else {
                state.profileEmail = null;
                state.profileFirstName = null;
                state.profileLastName = null;
                state.profilePhoneNumber = null;
              }
            },
    setProfileInitials (state){
        state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("")+ state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload){
        state.profileFirstName = payload
    },
    changeLastName(state, payload){
        state.profileLastName = payload
    },
    changeUsername(state, payload){
        state.profileUsername = payload
    },
    changePhoneNumber(state, payload){
      state.profilePhoneNumber = payload
  },
         // order mutations

        //  setOrderState(state, payload) {
           
        //     state.orderHTML= payload.orderHTML;
        //     state.orderTitle= payload.orderTitle;
        //     state.orderCategory= payload.orderCategory;
        //     state.orderFileName= payload.orderFileName;
        //     state.orderFileURL= payload.orderFileURL;
        //     state.dueDate= payload.dueDate;
        //     state.dueTime= payload.dueTime;
        //     state.experienceNeeded=payload.experienceNeeded;
        //     state.budget= payload.budget;
        //     state.dateSubmited = payload.dateSubmited;
        //     state.freelancerUsername = payload.freelancerUsername;
        //     state.clientFirstName = payload.changeFirstName;
        //     state.bids= payload.bids;
        //     state.status= payload.status;
        //     state.payment= payload.payment;
        //     state.comment= payload.comment;
        //   },
        setOrderState(state, payload) {
          state.orders= payload;
          
        },
        setClientOrderState(state, payload){
          state.clientOrders = payload;
        },
        setForwardedOrderState(state, payload){
          state.forwarded_orders = payload;
        },
        setTobebiddedOrderState(state, payload){
          state.tobebidded_orders = payload;
        },
        setMyBidsState(state, payload){
          state.myBids = payload;
        },
         newOrderPost(state, payload) {
          state.orderHTML = payload;
      },
      updateOrderTitle(state, payload) {
          state.orderTitle = payload;
      },
      updateOrderCategory(state, payload) {
          state.orderCategory = payload;
      },
      orderFileNameChange (state, payload) {
          state.orderFileName = payload;
      },
      createOrderFileURL (state, payload) {
          state.orderFileURL = payload;
      },
      updatedueDate(state, payload) {
        state.dueDate = payload;
    },
      updatedueTime(state, payload) {
          state.dueTime = payload;
      },
      updateExperienceNeeded(state, payload) {
        state.experienceNeeded = payload;
    },
    updateBudget(state, payload) {
      state.budget = payload;
  },
  updateDateSubmited(state, payload) {
    state.dateSubmited = payload;
},
updateFreelancerUsername(state, payload) {
    state.freelancerUsername = payload;
},
updateClientFirstName(state, payload) {
    state.clientFirstName = payload;
},
updateBids(state, payload) {
    state.bids = payload;
},
updateStatus(state, payload) {
    state.status = payload;
},
updatePayment(state, payload) {
    state.payment = payload;
},
updateComment(state, payload) {
    state.comment = payload;
},
//       // openPhotoPreview(state) {
//       //     state.blogPhotoPreview = !state.blogPhotoPreview;
//       // },
//       toggleEditPost (state, payload) {
//           state.editPost = payload;
//       },
//       setOrderState(state, payload) {
//           state.orderTitle = payload.orderTitle;
//           state.orderCategory = payload.orderCategory;
//           state.orderHTML = payload.orderHTML;
//           state.dueTime = payload.dueTime;
//           state.dueDate = payload.dueDate;
//           state.experienceNeeded = payload.experienceNeeded;
//           state.budget = payload.budget;
//           state.dateSubmited = payload.dateSubmited;
//           state.freelancerUsername = payload.freelancerUsername;
//           state.clientFirstName = payload.clientFirstName;
//           state.bids = payload.bids;
//           state.status = payload.status;
//           state.payment = payload.payment;
//           state.comment = payload.comment;

//           state.orderFileURL = payload.orderFile;
//           state.orderFileName = payload.orderFileName;
//       },
//       filterOrderPost(state, payload) {
//           state.orders = state.orders.filter((order) => order.orderID !== payload);
//       },

  },
  actions: {
// auth actions
    async getCurrentUser(context, user) {
      const auth = getAuth();
      const firestore = getFirestore();

      const userRef= doc(collection(firestore, "users"), auth.currentUser.uid);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const profileInfo = {
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                  phoneNumber: userData.phoneNumber,
                  email: userData.email,
                };
            context.commit("setProfileInfo", profileInfo);
            context.commit("setProfileInitials");
            const token = await user.getIdTokenResult();
            const claims = token.claims;

           context.commit("setProfileAdmin", claims.admin);
           context.commit("setProfileFreelancer", claims.freelancer);
           context.commit("setProfileReviewer", claims.reviewer);
      } else {
        console.log("User does not exist.");
      }
    },
    async logOut(context){
      const auth = getAuth();
      await signOut(auth)
      context.commit('SET_USER', null)
  },
      async updateUserSettings({commit, dispatch, state}) {
        const dataBase = await setDoc(usersRef).doc(state.profileId);
        await dataBase.update ({
            firstName: state.profileFirstName,
            lastName: state.profileLastName,
            // username: state.profileUsername,
            phoneNumber: state.profilePhoneNumber,
        });
        await dispatch("getCurrentUser");
        commit("setProfileInitials");
      },
        
        // orders actions
     // In your actions
// async getOrders({ state }) {
//   console.log('getOrders action called');
  
//   const q = query(ordersRef, orderBy('date', 'desc'));
//   const dbResults = await getDocs(q);
          
//   dbResults.forEach((doc) => {
//     if (!state.orders.some((order) =>order.orderID === doc.id)) {
//       const data = {
//         orderID: doc.data().orderID,
//         orderHTML: doc.data().orderHTML,
//         orderCategory: doc.data().orderCategory,
//         orderFileName: doc.data().orderFileName,
//         orderFileURL: doc.data().orderFileURL,
//         dueDate: doc.data().dueDate,
//         dueTime: doc.data().dueTime,
//         experienceNeeded: doc.data().experienceNeeded,
//         budget: doc.data().budget,
//         dateSubmited : doc.data().dateSubmited,
//         freelancerUsername: doc.data().freelancerUsername,
//         clientFirstName : doc.data().changeFirstName,
//         bids: doc.data().bids,
//         status: doc.data().status,
//         payment: doc.data().payment,
//         comment: doc.data().comment,
//       };
//       state.orders.push(data);
//     }
//   });
//   state.postLoaded = true;
//   console.log('state.orders:', state.orders);
// },
      async getOrders({ commit }) {

        const querySnapshot = await getDocs(collection(db, "orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setOrderState', data);
      },
      async getForwardedOrders({ commit }) {

        const querySnapshot = await getDocs(collection(db, "forwarded_orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setForwardedOrderState', data);
      },
      async getTobebiddedOrders({ commit }) {

        const querySnapshot = await getDocs(collection(db, "tobebidded_orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setTobebiddedOrderState', data);
      },
      async getMyBids({ commit }) {

        const querySnapshot = await getDocs(collection(db, "myBids"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setMyBidsState', data);
      },
      async getClientOrders({ commit }) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'orders');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setClientOrderState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
      },
      async updatePost({ commit, dispatch }, payload) {
          commit('filterOrderPost', payload);
          await dispatch("getOrders");
      },
      async deletePost({ commit }, payload) {
          const db = getFirestore();
          const getPost = await collection(db, "orders").doc(payload);
          
          await getPost.delete();
          commit('filterOrderPost', payload)
      },
        },
 
})
