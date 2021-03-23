<template>
  <h1>{{ title.toUpperCase() }}</h1>
  <h1 v-text="'v-text: ' + count"></h1>
  <h1>mastache: {{ count }}</h1>
  <h1 v-once>v-once {{ count }}</h1>
  <h1 v-if="isShowing" v-html="h1Template"></h1>
  <!-- <h3 v-else-if="isShowing === null">This is v-else-if part</h3> -->
  <h2 v-else>This is v-else part</h2>
  <p>Something else</p>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello Vue3",
      h1Template: "<h1>This is title inside h1 tag</h1>",
      isShowing: false,
      count: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
