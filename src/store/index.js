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
            invited: [],
            incomplete: [],
            inReview: [],
            done_orders: [],
            forwarded_orders: [],
            tobebidded_orders: [],
            incomplete_orders: [],
            inreview_orders: [],
            complete_orders: [],
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
            freelancer: "",
            client: "",
            status: "",
            payment: "",
            editPost: null,
    }
  },
  getters: {
    // order getters
    orders: state => state.orders,
    myBids: state => state.myBids,
    invited: state => state.invited,
    incomplete: state => state.incomplete,
    inReview: state => state.inReview,
    done_orders: state => state.done_orders,
    forwarded_orders: state => state.forwarded_orders,
    tobebidded_orders: state => state.tobebidded_orders, 
    incomplete_orders: state => state.incomplete_orders,
    inreview_orders: state => state.inreview_orders,
    complete_orders: state => state.complete_orders,
    clientOrders: state => state.clientOrders,
    user(state){
      return state.user
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
      setIncompleteOrderState(state, payload){
        state.incomplete_orders = payload;
  },
  setInreviewOrderState(state, payload){
    state.inreview_orders = payload;
},
setCompleteOrderState(state, payload){
  state.complete_orders = payload;
},
setDoneOrderState(state, payload){
  state.done_orders = payload;
},
      setMyBidsState(state, payload){
            state.myBids = payload;
      },
      setInvitedState(state, payload){
        state.invited = payload;
     },
     setIncompleteState(state, payload){
      state.incomplete = payload;
   },
   setInreviewState(state, payload){
    state.inReview = payload;
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
      
      updatefreelancer(state, payload) {
        state.freelancer = payload;
       },
     updateclient(state, payload) {
        state.client = payload;
    },
    updatestatus(state, payload) {
      state.status = payload;
    },
    updatepayment(state, payload) {
      state.payment = payload;
    },
    
      orderFileNameChange (state, payload) {
            state.orderFileName = payload;
      },
      createOrderFileURL (state, payload) {
            state.orderFileURL = payload;
      },
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
      async getIncompleteOrders({ commit }) {

        const querySnapshot = await getDocs(collection(db, "incomplete_orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setIncompleteOrderState', data);
      },
      async getInreviewOrders({ commit }) {

        const querySnapshot = await getDocs(collection(db, "inreview_orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setInreviewOrderState', data);
      },
      async getCompleteOrders({ commit }) {
        const querySnapshot = await getDocs(collection(db, "complete_orders"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setCompleteOrderState', data);
      },
      async getMyBids({ commit}) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'myBids');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setMyBidsState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
      }, 
      async getInvited({ commit}) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'invited');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setInvitedState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
      },    
      async getIncomplete({ commit}) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'incomplete');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setIncompleteState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
      },  
      async getInreview({ commit}) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'inReview');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setInreviewState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
      },  
      async getDoneOrders({ commit}) {
        onAuthStateChanged(getAuth(), async (user) => {
          if (user) {
            const userRef = doc(db, 'users', user.uid);
            const ordersRef = collection(userRef, 'done_orders');   
            try {
              const querySnapshot = await getDocs(ordersRef);
              const data = querySnapshot.docs.map((doc) => doc.data());
              commit('setDoneOrderState', data);
            } catch (error) {
              console.error(error);
            }
          } else {
            console.log('No user is currently logged in.');
          }
        });
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
          commit('filterOrderPost', payload);
      },
    },
}
)
