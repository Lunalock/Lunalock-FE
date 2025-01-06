<script setup lang="ts">
import { ref } from "vue";

// Current date
const selectedDate = ref(new Date());

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
    <q-card class="calendar-card q-pa-md">
        <q-date v-model="selectedDate" mask="YYYY-MM-DD" :options="(date) => true" :class-fn="getDateClass"
            first-day-of-week="1" bordered flat class="bg-transparent text-purple-300 calendar-full" minimal/>
    </q-card>
</template>

<style scoped>
.calendar-card :deep(){
    background-color: var(--color-auxiliary);
    border-radius: 16px;
    padding: 16px 16px 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Adjust calendar dimensions */
.calendar-full {
    width: 100%;
    height: 100%;
}

/* Fix the color of previous/next month's dates */
.q-date__other-month {
    color: rgba(255, 255, 255, 0.4);
    /* Light gray for visibility */
}

/* Custom Styles for Highlighted Dates */
.highlight-pink {
    background-color: rgba(244, 114, 182, 0.1);
    border: 1px solid rgba(244, 114, 182, 0.3);
    color: #f472b6;
    border-radius: 50%;
}

.highlight-purple {
    background-color: rgba(167, 139, 250, 0.1);
    border: 1px solid rgba(167, 139, 250, 0.3);
    color: #a78bfa;
    border-radius: 50%;
}

.highlight-current {
    background-color: transparent;
    color: #ffffff;
    border-radius: 50%;
    border: 2px solid #8b5cf6;
}

::v-deep(.q-date__calendar-item--fill) {
  visibility: visible !important; /* Ensure the missing days are visible */
  color: rgba(255, 255, 255, 0.3); /* Light gray color */
  background-color: transparent; /* Transparent background */
  font-weight: normal;
}

::v-deep(.q-date__calendar-weekdays){
    color: var(--color-lavender);
}
::v-deep(.q-date__view){
    padding: 16px 16px 0 16px;
}
</style>
