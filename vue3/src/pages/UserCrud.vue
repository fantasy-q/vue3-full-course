<template>
  <section class="flex w-full text-center">
    <div class="m-auto">
      <h1 class="text-3xl font-bold my-3">User Crud</h1>
      <div>
        <Create />
        <!-- <ul>
          <li v-for="user in state.users.data" :key="user.id">
            <p>
              <span>{{ user.first_name }}</span>
              <span>{{ user.last_name }}</span>
            </p>
            <p>{{ user.email }}</p>
          </li>
        </ul> -->
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="user in state.users.data" :key="user.id"> -->
            <tr v-for="user in state.users" :key="user._id">
              <!-- <td>{{ user.id }}</td> -->
              <td>{{ user._id }}</td>
              <td>
                <img
                  :src="user.avatar"
                  :alt="getFullName"
                  class="rounded-full w-16"
                />
              </td>
              <td>
                <div v-if="user.name">
                  <span>{{ user.name }}</span>
                </div>
                <div>
                  <span>{{ user.first_name }}</span
                  >&ensp;<span>{{ user.last_name }}</span>
                </div>
              </td>
              <td>{{ user.email }}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  class="px-2 py-1 bg-red-300 rounded"
                  @click="deleteUser(user._id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <input
            type="button"
            value="Prev"
            class="px-3 py-2 border rounded shadow bg-blue-400"
            @click="prevPage()"
            :disabled="state.users.page === 1"
            :class="{ 'cursor-not-allowed': state.users.page === 1 }"
          />
          <input
            type="button"
            value="Next"
            class="px-3 py-2 border rounded shadow bg-blue-400"
            @click="nextPage()"
            :disabled="state.users.page === state.users.total_pages"
            :class="{
              'cursor-not-allowed':
                state.users.page === state.users.total_pages,
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import axios from "../plugin/axios";
import Create from "../components/UserCrud/Create";

export default {
  components: {
    Create,
  },
  setup() {
    const state = reactive({
      // users: {},
      users: [],
    });

    const getFullName = computed(
      () => state.users.first_name + " " + state.users.last_name
    );

    async function nextPage() {
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      state.users = data;
    }

    async function prevPage() {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      state.users = data;
    }

    async function deleteUser(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    }

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    return {
      state,
      getFullName,
      nextPage,
      prevPage,
      deleteUser,
    };
  },
};
</script>

<style scoped>

</style>