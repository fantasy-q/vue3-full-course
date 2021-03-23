<template>
  <div v-if="isShowLoginForm">
    <section
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
      @click="close()"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow">
          <h1 class="text-3xl text-center font-bold">Login</h1>
          <WithGoogle @signed-from-google="close()" />
          <p class="my-0 text-center">Or</p>
          <form class="p-2 my-2" @submit.prevent="submit()">
            <div class="my-4">
              <label for="username">Email or Username:</label>
              <input
                ref="emailRef"
                v-model="form.email"
                type="text"
                id="username"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your Email or Username"
              />
            </div>
            <div class="my-4">
              <label for="password">Password:</label>
              <input
                v-model="form.password"
                type="password"
                id="password"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your Password"
              />
            </div>
            <div class="my-4">
              <input
                type="submit"
                class="w-full rounded shadow-md bg-blue-400 text-white py-2 outline-none cursor-pointer"
                :value="isLoading ? '⌛' : 'Login'"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import WithGoogle from "../components/Login/WithGoogle";

export default {
  components: {
    WithGoogle,
  },
  data() {
    return {
      form: {
        email: "test@vue.com",
        password: "password",
      },
      isLoading: false,
    };
  },
  computed: {
    isShowLoginForm() {
      return this.$store.state.isShowLoginForm;
    },
  },
  methods: {
    close() {
      // console.log("close");
      // this.$emit("close-login-form");
      this.$store.commit("setLoginModal", false);
    },
    submit() {
      const { email, password } = this.form;
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          // var user = userCredential.user;
          // ...
          console.log("userCredential", userCredential);

          this.form.email = "";
          this.form.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          console.log(error);
        });
    },
  },
  mounted() {
    // console.log(this.$refs);
    // this.$refs.emailRef.focus();
  },
};
</script>

<style>
</style>