<template>
  <section class="flex flex-wrap flex-col w-full text-center">
    <h1 class="text-3xl my-3 font-bold">Reusable Modal</h1>
    <div class="m-auto">
      <!-- Red -->
      <Modal v-if="isRedModalOpen" @close-modal="isRedModalOpen = false">
        <template v-slot:title>
          <h1 class="bg-red-500 p-2">Red Modal</h1>
        </template>
        <template v-slot:body>
          <p>This is a p tag</p>
        </template>
      </Modal>
      <input
        type="button"
        value="Red Modal"
        class="text-white bg-red-500 rounded p-2 font-bold"
        @click="isRedModalOpen = true"
      />
      <!-- Blue -->
      <Modal v-if="isBlueModalOpen" @close-modal="isBlueModalOpen = false">
        <!-- <h1 class="bg-blue-500 p-2">blue Modal</h1> -->
      </Modal>
      <input
        type="button"
        value="Blue Modal"
        class="text-white bg-blue-500 rounded p-2 font-bold"
        @click="isBlueModalOpen = true"
      />
      <!-- Green -->
      <Modal v-if="isGreenModalOpen" @close-modal="isGreenModalOpen = false">
        <template v-slot:title>
          <h1 class="bg-green-500 p-2">Green Modal</h1>
        </template>
        <template v-slot:body>
          <p>This is a p tag</p>
        </template>

        <section>This is a section tag</section>
      </Modal>
      <input
        type="button"
        value="Green Modal"
        class="text-white bg-green-500 rounded p-2 font-bold"
        @click="isGreenModalOpen = true"
      />
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);
    const isGreenModalOpen = ref(false);

    return {
      isRedModalOpen,
      isBlueModalOpen,
      isGreenModalOpen,
    };
  },
};
</script>

<style scoped>
input {
  width: 10em;
}
</style>