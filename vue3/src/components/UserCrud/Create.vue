<template>
  <input
    type="button"
    value="Add User"
    class="px-2 py-1 border rounded"
    @click="isModalOpen = true"
  />
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submit()">
          <div>
            <label for="">Avatar</label>
            <input
              class="input"
              v-model="state.form.avatar"
              type="text"
              placeholder="avatar"
            />
          </div>
          <div>
            <label for="">Name</label>
            <input
              class="input"
              v-model="state.form.name"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <label for="">Email</label>
            <input
              class="input"
              v-model="state.form.email"
              type="email"
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Create"
              class="bg-gray-100 text-black"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "../../plugin/axios";
import Modal from "../Modal";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        avatar: "",
        name: "",
        email: "",
      },
    });

    async function submit() {
      const data = await axios.post("/users", state.form);
      // console.log(data);
      state.users.push(data);
      state.form.avatar = "";
      state.form.name = "";
      state.form.email = "";
      isModalOpen.value = false;
    }

    return {
      isModalOpen,
      state,
      submit,
    };
  },
};
</script>

<style scoped>
td,
th {
  border: 2px solid #f5f2f2;
  padding: 0.5rem 1rem;
}
form div {
  padding: 0.5rem;
}
form input {
  width: 100%;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 3px;
  color: black;
}
</style>