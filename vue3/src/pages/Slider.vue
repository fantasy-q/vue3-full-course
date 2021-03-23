<template>
  <div class="flex flex-wrap w-full">
    <div class="absolute w-full overflow-hidden" v-for="(color, index) in colors" :key="index">
      <transition name="fade">
        <div
          v-if="this.currSlide == index"
          class="h-96"
          :class="[TWbgColor(color, 400)]"
        ></div>
      </transition>
    </div>

    <div class="w-full h-96 absolute">
      <div class="absolute bottom-3 flex justify-center w-full">
        <div
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
          :class="[
            currSlide == index
              ? TWbgColor('gray', 100)
              : TWbgColor('gray', 600),
          ]"
          v-for="(item, index) in colors"
          :key="index"
          @click="selectSlide(index)"
        ></div>
      </div>
    </div>

    <!-- <div class="my-5 flex w-full">
      <div class="m-auto">
        <transition class="">
          <h1>Slider Carousel</h1>
        </transition>
        <input class="px-2 border rounded" type="button" value="Toggle Text" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideTime: 2000,
      interval: "",
      currSlide: 0,
      colors: ["red", "yellow", "green", "blue", "purple"],
    };
  },
  methods: {
    selectSlide(index) {
      this.currSlide = index;
    },
    TWbgColor(color, value) {
      return `bg-${color}-${value}`;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.currSlide == this.colors.length - 1) {
        this.currSlide = 0;
      } else {
        this.currSlide++;
      }
    }, this.slideTime);
  },
  beforeMount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>