<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap my-2">
      <p
        class="text-center py-2"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center py-2"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between">
      <input
        class="p-2 border rounded cursor-pointer"
        type="button"
        value="Prev"
        @click="prev"
      />
      <input
        class="p-2 border rounded cursor-pointer"
        type="button"
        value="Next"
        @click="next"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        {
          month: "long",
        }
      );
    },
  },
  methods: {
    daysInMonth() {
      // const month = new Date().getMonth() + 1;
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    prev() {
      switch (this.currentMonth) {
        case 0:
          this.currentMonth = 11;
          this.currentYear--;
          break;
        default:
          this.currentMonth--;
          break;
      }
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate ? "bg-blue-200" : "";
    },
  },
};
</script>

<style>
</style>