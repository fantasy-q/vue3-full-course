<template>
  <div class="m-auto">
    <table
      class="border-collapse table-fixed container max-w-lg text-center text-gray-700"
    >
      <caption
        class="text-left border-b border-gray-300 border-solid leading-loose text-2xl"
      >
        <strong>{{ MonthName }}</strong
        >,
        <span>{{ Year }}</span>
      </caption>

      <colgroup>
        <col
          v-for="(day, index) in days"
          :key="index"
          :class="[
            'cal-' + getDayShort(index).toLowerCase(),
            { 'bg-pink-100': isWeekend(index) },
          ]"
        />
      </colgroup>
      <thead class="border-b-4 border-gray-500">
        <tr>
          <th
            class="leading-ultra-loose px-0 w-1/7 border"
            v-for="(day, index) in days"
            :key="index"
            :abbr="day"
            scope="col"
          >
            {{ getDayShort(index) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in 6" :key="row">
          <td
            class="leading-ultra-loose p-0 w-1/7 border"
            v-for="day in 7"
            :key="day"
          >
            <a
              class="block"
              href="#"
              :class="{
                '': (i = (row - 1) * 7 + day),
                'hover:bg-green-100 focus:bg-green-100':
                  isCurrentMonth(i) && !isToday(i),
                'text-gray-400 bg-gray-300 cursor-not-allowed': !isCurrentMonth(
                  i
                ),
                'text-white bg-purple-500 hover:bg-blue-400 focus:bg-blue-400': isToday(
                  i
                ),
              }"
              >{{ calendarContent(i) }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      Year: new Date().getFullYear(),
      Month: new Date().getMonth(),
      Date: new Date().getDate(),
    };
  },
  computed: {
    MonthName() {
      return new Date(this.Year, this.Month).toLocaleString("default", {
        month: "long",
      });
    },
  },
  methods: {
    isToday(i) {
      const t = i - this.beginDay();
      return t === this.Date;
    },
    isCurrentMonth(i) {
      const t = i - this.beginDay();
      return t >= 1 && t <= this.daysInMonth();
    },
    calendarContent(i) {
      let content = null;
      const lastMonthDays = this.daysInMonth(this.Year, this.Month - 1);
      const currMonthDays = this.daysInMonth();
      const nextMonthDay = i - this.beginDay() - currMonthDays;
      if (i <= this.beginDay()) {
        content = lastMonthDays - this.beginDay() + i;
      } else if (i - this.beginDay() <= currMonthDays) {
        content = i - this.beginDay();
      } else {
        content = nextMonthDay;
      }
      return content;
    },
    daysInMonth(y, m) {
      y ? y : (y = this.Year);
      m ? m : (m = this.Month);
      return new Date(y, m + 1, 0).getDate();
    },
    beginDay(y, m) {
      y ? y : (y = this.Year);
      m ? m : (m = this.Month);
      return new Date(y, m, 1).getDay();
    },
    getDayShort(index) {
      return this.days[index].slice(0, 3);
    },
    isWeekend(index) {
      switch (index) {
        case 0:
        case 6:
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style scoped>
table {
  font-family: "Lucida Grande", Verdana, arial, sans-serif;
}
</style>