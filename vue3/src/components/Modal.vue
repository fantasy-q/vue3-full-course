<template>
  <section
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
    @click="close()"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full p-2">
      <div
        class="z-30 m-auto bg-black p-2 rounded shadow w-1/3 text-center text-white font-bold text-xl"
      >
        <slot name="title">Provide Some Data Here</slot>
        <main>
          <slot name="body"></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close-modal");
    }

    return {
      close,
    };
  },
};
</script>

<style>
</style>