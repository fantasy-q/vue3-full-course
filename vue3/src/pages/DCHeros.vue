<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heros ({{ herosCount }})</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <input
          class="bg-white cursor-pointer"
          type="button"
          value="x"
          @click="removeHero(index)"
        />
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero()">
      <input
        class="border rounded"
        type="text"
        placeholder="Type Hero Name Here"
        v-model.trim="newHero"
        ref="newHeroRef"
      />
      <input
        class="border rounded bg-gradient-to-r from-blue-500 to-pink-500 text-white cursor-pointer"
        type="submit"
        value="Add Hero"
        @click="addHero"
        :disabled="!hasText"
      />
    </form>
    <div v-if="false">
      <p>randComputed: {{ randComputed }}</p>
      <p>randComputed: {{ randComputed }}</p>
      <p>randMethod(): {{ randMethod() }}</p>
      <p>randMethod(): {{ randMethod() }}</p>
      <h2>{{ fname }} {{ lname }}</h2>
      <h2>{{ fullname }}</h2>
      <input type="button" value="Set Full Name" @click="setFullName()" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
// reactive,
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "Super Girl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "SuperMan" },
    ]);

    const herosCount = computed({
      get: () => dcHeros.value.length,
    });

    function addHero() {
      if (newHero.value) {
        dcHeros.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }
    function removeHero(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => {
        return i !== index;
      });
    }

    onMounted(() => {
      newHeroRef.value.focus();
    });

    return {
      newHeroRef,
      newHero,
      herosCount,
      dcHeros,
      addHero,
      removeHero,
    };
  },
  data() {
    return {
      fname: "Sarthak",
      lname: "Shrivastava",
      attribute: "value",
      // newHero: "",
      // dcHeros: [
      //   { name: "Super Girl" },
      //   { name: "Flash" },
      //   { name: "Batman" },
      //   { name: "Arrow" },
      //   { name: "SuperMan" },
      // ],
    };
  },
  computed: {
    fullname: {
      get() {
        return `Full name is ${this.fname} ${this.lname}`;
      },
      set(fullname) {
        const values = fullname.split(" ");
        this.fname = values[0];
        this.lname = values[1];
      },
    },
    randComputed() {
      return Math.random();
    },
    // herosCount() {
    //   return this.dcHeros.length;
    // },
    hasText() {
      return Boolean(this.newHero);
    },
  },
  methods: {
    setFullName() {
      this.fullname = "Bitfumes Tutorial";
    },
    randMethod() {
      return Math.random();
    },
    // addHero() {
    //   if (this.newHero) {
    //     let hero = { name: this.newHero };
    //     this.dcHeros.push(hero);
    //     this.newHero = "";
    //   }
    // },
    // removeHero(index) {
    //   this.dcHeros = this.dcHeros.filter((hero, i) => {
    //     return i !== index;
    //   });
    // },
  },
  mounted() {
    console.log(this.$refs);
    // this.$refs.newHeroRef.focus()
  },
};
</script>

<style>
</style>