<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-11/12 h-screen">
      <article class="w-1/3 border">
        <textarea
          class="w-full h-full outline-none p-2"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article
        class="w-1/3 border bg-gray-100 p-2"
        v-html="markedText"
      ></article>
      <article class="w-1/3 border bg-gray-200 p-2">
        {{ markedText }}
      </article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixin/debouce";

export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value;
      };
      debounce(task, 1000);
    },
  },
};
</script>

<style>
</style>