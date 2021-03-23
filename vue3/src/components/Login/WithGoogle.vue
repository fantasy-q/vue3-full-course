<template>
  <div>
    <section class="my-5 w-full text-center">
      <input
        type="button"
        value="Login With Google"
        class="bg-white border rounded p-1"
        @click="loginWithGoogle"
      />
    </section>
  </div>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("signed-from-google");
          // console.log('signed');
        });
    },
  },
};
</script>

<style>
</style>