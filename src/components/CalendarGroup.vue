<script setup lang="ts">
import { ref } from "vue";
// import { usePeriodStore } from "#imports";

// const periodStore = usePeriodStore()

const selectedDate = ref(new Date());

// watch(selectedDate, (newDate: Date) => {
//     if(newDate){
//         periodStore.setDate(newDate)
//     }
// })

// Custom colors for specific dates
const highlightedDates = {
  pink: ["2025-03-04", "2025-03-05", "2025-03-06", "2025-03-07", "2025-03-08"],
  purple: ["2025-03-13", "2025-03-14", "2025-03-15"],
  current: ["2025-03-18"]
};

// Function to get the correct color class for a date
function getDateClass(date: string) {
  if (highlightedDates.pink.includes(date)) {
    return "highlight-pink";
  }
  if (highlightedDates.purple.includes(date)) {
    return "highlight-purple";
  }
  if (highlightedDates.current.includes(date)) {
    return "highlight-current";
  }
  return "";
}
</script>

<template>
  <q-card class="calendar-card q-pa-md !bg-gray-900">
    <q-date v-model="selectedDate" mask="YYYY-MM-DD" :options="(date) => true" :class-fn="getDateClass"
      first-day-of-week="1" bordered year flat class="bg-transparent calendar-full !w-full" minimal />
  </q-card>
</template>

<style scoped></style>
