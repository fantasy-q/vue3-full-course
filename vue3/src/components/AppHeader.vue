<template>
  <nav class="flex w-full font-bold bg-purple-700 text-white font-serif">
    <!-- <router-link to="/dc-heros">DCHeros</router-link>
    <router-link to="/calendar">Calendar</router-link> -->
    <router-link
      class="p-3 text-center"
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      >{{ route.name }}
    </router-link>
    <!-- @click="$emit('login-clicked')" -->
    <input
      v-if="!isSigned"
      class="bg-purple-700 font-bold ml-auto p-3"
      type="button"
      value="Login"
      @click="showLoginForm()"
    />
    <input
      v-else
      class="bg-purple-700 font-bold ml-auto p-3"
      type="button"
      value="Logout"
      @click="signOut()"
    />
  </nav>
</template>

<script>
import routes from "../route/routes";
import firebase from "../utilities/firebase";

export default {
  // props: {
  //   signed: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      routes,
    };
  },
  computed: {
    isSigned() {
      return this.$store.state.isSigned;
    },
  },
  methods: {
    showLoginForm() {
      this.$store.commit("setLoginModal", true);
    },
    signOut() {
      firebase.auth().signOut();
      // .then((userCredential) => {
      //   // Sign-out successful.
      //   console.log(userCredential);
      // })
      // .catch((error) => {
      //   // An error happened.
      //   console.log(error);
      // });
    },
  },
};
</script>

<style>
</style>

