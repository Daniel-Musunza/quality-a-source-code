<template>
  <router-view/>
</template>
<script>

// import firebase from 'firebase/app'
import { getAuth} from "firebase/auth";

export default {
      name: 'App',
      // data (){
      //   return {
      //       navigation: null,
      //   }
      // },
      // methods: {
      //   checkRoute() {
      //       if (this.$route.path ==="/signIn" || this.$route.path === "/signUp" || this.$route.path === "/forgot-password"){
      //           this.navigation = true;
      //           return;
      //       }
      //       this.navigation = false;
      //       return;
      //   }
      // },
      // watch: {
      //   $route() {
      //   this.checkRoute();
      //   }
      // },
      // computed: {
      //   user() {
      //         return this.$store.state.user;
      //   },
      //   admin() {
      //         return this.$store.state.profileAdmin;
      //   }
      // },
      // components: {
      //   NavBar
      // },
      async mounted() {
  const auth = getAuth();
   await auth.onAuthStateChanged(user => {
     this.$store.dispatch("getCurrentUser", user);

    });
  
  }
}
</script>
<style>
tr{
padding: 5px gray;
}
.card-content{
  margin:15px;
}
</style>
