export default {
  beforeCreated() {
    console.log('beforeCreated');
  },
  created() {
    console.log('created');
  },
  beforeMounted() {
    console.log('beforeMounted');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdated() {
    console.log('beforeUpdated');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmounted() {
    console.log('beforeUnmounted');
  },
  unmounted() {
    console.log('unmounted');
  },
}