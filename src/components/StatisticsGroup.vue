<script setup lang="ts">
import { ref } from 'vue';

const periodStarted = ref(false)
const stats = ref([
  {
    label: !periodStarted.value ? "Next Period" : 'Current Status',
    date: "Mar 15, 2025",
    subtext: "In 7 days",
    gradient: "linear-gradient(to right, #6A1B1A, #C62828)",
    icon: "event" // Material Icon for the next period
  },
  {
    label: "Ovulation Day",
    date: "Mar 1, 2025",
    subtext: "High Fertility",
    gradient: "linear-gradient(to right, #4527A0, #7E57C2)",
    icon: "egg" // Material Icon for ovulation day
  },
  {
    label: "Cycle Length",
    date: "28 Days",
    subtext: "Regular",
    gradient: "linear-gradient(to right, #1565C0, #42A5F5)",
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
  <div class="statistics-container">
    <!-- <div class="period-buttons-container">
        <q-btn  unelevated class="flex-1 py-3 bg-gradient-to-r from-red-800 to-red-900 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 start-stop-button" @click="startPeriod">
          <q-icon name="play_circle" class="mr-2" />
          <p>Period Started</p>
        </q-btn>

        <q-btn unelevated class="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 start-stop-button" @click="endPeriod">
          <q-icon name="stop_circle" class="mr-2" />
          <p>Period Ended</p>
        </q-btn>
      </div> -->
    <div v-for="stat in stats" :key="stat.label" class="stat-card" :style="{ background: stat.gradient }">
      <div class="stat-content">
        <div class="stat-header">
          {{ stat.label }}
        </div>
        <div class="stat-date">
          {{ stat.date }}
        </div>
        <div class="stat-subtext">
          {{ stat.subtext }}
        </div>
      </div>
      <!-- Quasar Icon on the right side -->
      <q-icon :name="stat.icon" class="stat-icon" />
    </div>
  </div>
</template>

<style scoped>
.statistics-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-bottom: 16px;
}

.start-stop-button {
  display: flex;
  font-size: 12px;
  max-width: 48%;
}

.stat-card {
  position: relative;
  /* Make the card container relative for positioning the icon */
  padding: 16px;
  border-radius: 12px;
  text-align: left;
  color: var(--color-text-light);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.period-buttons-container {
  display: flex;
  justify-content: space-between;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 70%;
}

.stat-header {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.85;
}

.stat-date {
  font-size: 1.2rem;
  font-weight: 700;
}

.stat-subtext {
  font-size: 0.9rem;
  opacity: 0.75;
}

/* Icon styles */
.stat-icon {
  position: absolute;
  /* Position it on the card */
  top: 50%;
  right: 48px;
  /* Space from the right edge */
  transform: translateY(-50%);
  font-size: 2.8rem;
  /* Icon size */
  color: rgba(255, 255, 255, 0.85);
  /* Subtle white */
  opacity: 0.85;
}

.stat-icon:hover {
  color: rgba(255, 255, 255, 1);
  /* Brighten on hover */
  transform: translateY(-50%) scale(1.1);
  /* Slight zoom on hover */
  transition: color 0.2s ease, transform 0.2s ease;
}
</style>
