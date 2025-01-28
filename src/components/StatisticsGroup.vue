<script setup lang="ts">
import { ref } from 'vue';

const periodStarted = ref(false)
const stats = ref([
  {
    label: !periodStarted.value ? "Next Period" : 'Current Status',
    date: "Mar 15, 2025",
    subtext: "In 7 days",
    cssClass: "bg-gradient-to-r from-red-800 to-red-700",
    icon: "event" // Material Icon for the next period
  },
  {
    label: "Ovulation Day",
    date: "Mar 1, 2025",
    subtext: "High Fertility",
    cssClass: "bg-gradient-to-r from-purple-800 to-purple-500",
    icon: "egg" // Material Icon for ovulation day
  },
  {
    label: "Cycle Length",
    date: "28 Days",
    subtext: "Regular",
    cssClass: "bg-gradient-to-r from-blue-800 to-blue-500",
    icon: "sync" // Material Icon for cycle length
  }
]);

// const startPeriod = () => {
//   const today = new Date();
//   periodStarted.value = true
//   console.log("Period started:", periodStarted.value);
// };

// const endPeriod = () => {
//   const today = new Date();
//   console.log("Period ended:", today);
// };
</script>

<template>
  <div class="w-full pb-4">
    <div v-for="stat in stats" :key="stat.label" class="relative p-4 rounded-xl text-left shadow-lg mb-4"
      :class="stat.cssClass">
      <div class="flex flex-col gap-2 w-[70%]">
        <div class="text-sm font-semibold opacity-85">
          {{ stat.label }}
        </div>
        <div class="text-xl font-bold">
          {{ stat.date }}
        </div>
        <div class="text-sm opacity-75">
          {{ stat.subtext }}
        </div>
      </div>
      <q-icon :name="stat.icon" class="absolute top-1/2 right-12 transform -translate-y-1/2 text-[2.8rem] !text-4xl" />
    </div>
  </div>
</template>

<style scoped></style>
