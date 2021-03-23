import { onMounted, onUnmounted } from "vue";

export default function useWindowEvent(event, handler) {
  onMounted(() => window.addEventListener(event, handler));
  onUnmounted(() => window.removeEventListener(event, handler));
}