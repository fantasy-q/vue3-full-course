<template>
  <section class="text-center flex flex-col w-full">
    <h1 class="text-3xl m-2 font-bold">Real Time Chat</h1>
    <div class="m-auto w-4/5">
      <div class="border-2 border-black rounded-sm">
        <div class="h-64 w-full p-4 overflow-y-scroll overflow-x-hidden mr-0">
          <div
            v-for="(chat, key) in state.chats"
            :key="key"
            class="text-left mb-5"
            :class="{ 'text-right': chat.uid === uid }"
          >
            <span
              class="inline-block bg-blue-100 rounded-md p-2 break-words text-left max-w-xs"
            >
              {{ chat.msg }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <input
          type="text"
          v-model="state.message"
          class="border bg-white p-2 rounded-sm text-black font-semibold w-full"
          @keydown.enter="sendMessage()"
        />
        <input
          type="button"
          value="Send"
          class="border border-blue-400 bg-blue-400 text-white font-bold p-2 rounded-md"
          @click="sendMessage()"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, computed } from "vue";
import firebase, { dbChat } from "../utilities/firebase";
import { useStore } from "vuex";

export default {
  setup() {
    // const chats = ref({});
    const state = reactive({
      chats: [],
      message: "",
      uid: null,
    });

    const store = useStore();
    const uid = computed(() => store.state.authUser.uid);

    function sendMessage() {
      const newChat = dbChat.push();
      const time = new Date().getTime();
      const msgObj = {
        uid: state.uid,
        msg: state.message,
        time,
      };
      newChat.set(msgObj);
      state.message = null;
    }

    onMounted(async () => {
      dbChat.on("child_added", (snapshot) => {
        state.uid = firebase.auth().currentUser.uid;
        state.chats.push({
          key: snapshot.key,
          ...snapshot.val(),
        });
      });
    });

    return {
      // chats,
      uid,
      state,
      sendMessage,
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: #f1f1f1; */
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #888; */
  background: #60a5fa;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>