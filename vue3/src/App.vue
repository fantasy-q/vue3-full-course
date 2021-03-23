<template>
  <!-- @login-clicked="isShowLoginForm = true" -->
  <!-- :signed="isSignedIn" -->
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <!-- v-if="isShowLoginForm" -->
    <!-- @close-login-form="isShowLoginForm = false"  -->
    <LoginModal />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";

export default {
  components: {
    AppHeader,
    LoginModal,
  },
  // data() {
  //   return {
  //     isShowLoginForm: false,
  //     isSignedIn: false,
  //     authUser: {},
  //   };
  // },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        // User is signed in.
        // this.isSignedIn = true;
        // this.authUser = user;
        this.$store.commit("signedIn", true);
        this.$store.commit("authedUser", user);
      } else {
        // No user is signed in.
        // this.authUser = {};
        this.isSignedIn = false;
        this.$store.commit("signedIn", false);
        this.$store.commit("authedUser", user);
      }
    });
  },
};
</script>

<style>
input[type="button"],
input[type="submit"] {
  outline: none;
  cursor: pointer;
  /* background-color: white; */
}
</style>