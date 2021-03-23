<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-center">Calculator</h1>
      <!-- Display -->
      <p
        class="h-10 text-2xl text-right mt-10 mb-2 bg-white w-44 overflow-hidden"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <small class="block h-5 w-44">{{ prevNum }}{{ selectedOperator }}</small>
      <!-- Button -->
      <div class="grid grid-cols-4 gap-1">
        <button
          v-for="c in btn"
          :key="c"
          :class="[
            btnTailWind,
            {
              'w-auto col-span-2': ['0'].includes(c),
              'h-auto row-span-2': ['='].includes(c),
            },
          ]"
          @click="pressed(c)"
        >
          {{ c }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// import { onMounted, onUnmounted, ref } from "vue";
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";

export default {
  setup() {
    const btn = ref([
      /*0*/ "AC",
      "CE",
      "÷",
      "×",
      /*1*/ "7",
      "8",
      "9",
      "-",
      /*2*/ "4",
      "5",
      "6",
      "+",
      /*3*/ "1",
      "2",
      "3",
      "=",
      /*4*/
      "0",
      ".",
    ]);
    const btnTailWind = ref("p-2 w-10 h-10 border rounded shadow");
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperator = ref("");

    function pressed(c) {
      switch (true) {
        case ["+", "-", "×", "÷", "*", "/"].includes(c):
          console.log(1);
          applyOperation(c);
          break;
        case ["=", "Enter"].includes(c):
          result();
          console.log(2);
          break;
        case /^[0-9]$/.test(c):
          appendNumber(c);
          console.log(3);
          break;
        case c === "CE":
          clear();
          console.log(4);
          break;
        case c === "AC":
          console.log(5);
          allClear();
          break;
        default:
          break;
      }
    }
    function applyOperation(operator) {
      result();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperator.value = operator;
    }
    function result() {
      switch (selectedOperator.value) {
        case "+":
          currentNum.value = +prevNum.value + +currentNum.value;
          break;
        case "-":
          currentNum.value = prevNum.value - currentNum.value;
          break;
        case "×":
        case "*":
          currentNum.value = prevNum.value * currentNum.value;
          break;
        case "÷":
        case "/":
          currentNum.value = prevNum.value / currentNum.value;
          break;
      }
      prevNum.value = "";
      selectedOperator.value = "";
    }
    function appendNumber(value) {
      currentNum.value += value;
    }
    function clear() {
      currentNum.value = "";
    }
    function allClear() {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperator.value = "";
    }
    function keyDownHandler(event) {
      console.log(event.key);
      pressed(event.key);
    }
    useWindowEvent("keydown", keyDownHandler);
    // onMounted(() => {
    //   window.addEventListener("keydown", keyDownHandler);
    // });
    // onUnmounted(() => {
    //   window.removeEventListener("keydown", keyDownHandler);
    // });

    return {
      btn,
      btnTailWind,
      currentNum,
      prevNum,
      selectedOperator,
      //
      pressed,
      result,
      applyOperation,
      appendNumber,
      clear,
      allClear,
      keyDownHandler,
    };
  },
};
</script>

<style>
</style>