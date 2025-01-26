<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { usePeriodStore } from "@/stores/periodStore";
// import { useDateFormat } from "@vueuse/core";

const router = useRouter();
// const periodStore = usePeriodStore();

const selectedMood = ref<number | null>(null);
const notes = ref('')
// const selectedDate = ref(periodStore.selectedDate);

const formattedDate = ref('05-31-1994');

const inputDate = ref(formattedDate.value);

const moods = [
  { label: "Happy", icon: "sentiment_satisfied_alt", color: "#FFD700" }, // Yellow
  { label: "Sad", icon: "sentiment_dissatisfied", color: "#1E90FF" },    // Blue
  { label: "Tired", icon: "hotel", color: "#FFA500" },                  // Orange
  { label: "Angry", icon: "sentiment_very_dissatisfied", color: "#FF4500" }, // Red
  { label: "Stressed", icon: "mood_bad", color: "#800080" }             // Purple
];

const quickLog = ["Cramps", "Headache", "Bloating", "Fatigue"];

const sliders = [
  { label: "Mood", icon: "psychology", value: 3 },
  { label: "Energy", icon: "bolt", value: 3 },
  { label: "Appetite", icon: "restaurant", value: 3 },
  { label: "Sleep", icon: "nights_stay", value: 3 },
];

const selectMood = (index: number) => {
  selectedMood.value = index;
};

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <q-layout>
    <q-bar class="q-pa-md header-bar">
      <q-btn @click="goBack" flat round icon="arrow_back" class="text-white" />
      <q-space />
      <div class="header-date">
        <div class="date-display">Track Symptoms</div>
      </div>
      <q-space />
      <q-btn flat round icon="check" class="text-white invisible" />
    </q-bar>
    <q-page-container>
      <div class="page-container">
        <div class="track-symptoms-page">
          <div class="date-display-container">
            <div class="date-item">Today</div>
            <div class="date-item">
              <q-input v-model="inputDate" filled type="date" class="date-picker">
              </q-input>
            </div>
          </div>
          <!-- Mood Section -->
          <div class="section">
            <div class="section-title">How are you feeling?</div>
            <div class="mood-icons row q-my-md">
              <q-btn v-for="(mood, index) in moods" :key="index" flat class="mood-button"
                :class="{ selected: selectedMood === index }" @click="selectMood(index)">
                <q-icon :name="mood.icon" size="32px" :style="{ color: mood.color }" />
                <div class="mood-label">{{ mood.label }}</div>
              </q-btn>
            </div>
          </div>
          <!-- Quick Log Section -->
          <div class="section">
            <div class="section-title">Quick Log</div>
            <div class="quick-log q-my-md">
              <q-chip v-for="(symptom, index) in quickLog" :key="index" outline class="quick-log-chip">
                {{ symptom }}
              </q-chip>
            </div>
          </div>
          <!-- Symptom Sliders -->
          <div class="section">
            <div class="section-title">Symptoms</div>
            <div class="row q-my-md">
              <q-card v-for="(symptom, index) in sliders" :key="index" class="symptom-card">
                <div class="symptom-header">
                  <q-icon :name="symptom.icon" class="symptom-icon text-purple-400" />
                  {{ symptom.label }}
                </div>
                <q-slider v-model="symptom.value" :min="1" :max="5" snap :step="1" marker-labels
                  class="custom-slider" />
              </q-card>
            </div>
          </div>
          <!-- Notes Section -->
          <div class="section">
            <div class="section-title">Notes</div>
            <q-input v-model="notes" filled type="textarea" placeholder="Add any additional notes about your day..."
              class="notes-input" />
            <div class="footer-text q-mt-md q-mb-md text-purple-300">
              Tracking regularly helps you stay in tune with your body 💜
            </div>
          </div>
          <div class="flex gap-4">
            <q-btn flat unelevated label="Discard" no-caps
              class="flex-1 py-3 hover:bg-gray-800/80 transition-colors discard-btn" />
            <q-btn flat unelevated label="Save" no-caps
              class="flex-1 py-3 hover:bg-purple-700  transition-colors save-btn" />
          </div>



        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
::v-deep(.q-bar) {
  background: none;
}

::v-deep(.discard-btn) {
  background-color: #1f2937 !important;
  color: #9ca3af !important;
  height: 48px;
  border-radius: 12px;
}

::v-deep(.save-btn) {
  background-color: #6b21a8 !important;
  /* Tailwind purple-600 */
  color: white !important;
  height: 48px;
  border-radius: 12px;
}

.track-symptoms-page {
  color: #fff;
  margin-bottom: 22px;
}

.page-container {
  padding: 12px;
}

.header-bar {
  height: 50px;
}

.date-display {
  display: flex;
  align-items: center;
  gap: 4px;
}

.date-display-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: none !important;
  border-radius: 12px;
  background-color: var(--color-auxiliary);
  color: var(--color-text-light);
  font-weight: 600;
  margin: 0 0 16px 0;
}

.date-item {
  display: flex;
  align-items: center;
  gap: 8px;

}

.date-picker {
  max-width: 200px;
  /* Adjust width as needed */
}

.calendar-icon {
  color: #a78bfa;
  /* Tailwind's purple-400 */
  font-size: 18px;
}


.section-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.mood-icons {
  display: flex;
  justify-content: space-around;
  gap: 8px;
}

.mood-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 80px;

  border-radius: 12px;
  background-color: var(--color-auxiliary);
  transition: all 0.3s ease;
}

.mood-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mood-button.selected {
  background-color: none;
  box-shadow: 0 0 10px #7e57c2;
}

.mood-label {
  font-size: 10px;
  text-align: center;
  margin-top: 4px;
  opacity: 0.8;
}

.quick-log-chip {
  margin: 4px;
  color: #fff;
  border: none;
  background: var(--color-auxiliary) !important;
  height: 40px;
}

.symptom-card {
  flex: 1;
  margin: 8px;
  background: var(--color-auxiliary);
  border-radius: 8px;
  padding: 16px;
}

.symptom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
}

.symptom-slider {
  margin-top: 8px;
}

.symptom-icon {
  font-size: 24px !important;
}

.custom-slider::v-deep(.q-slider__track) {
  background-color: rgba(157, 104, 222, 0.3);
  /* Purple with transparency */
}

.custom-slider::v-deep(.q-slider__thumb) {
  color: #7e57c2 !important;
}

/* Slider handle hover/active state */
.custom-slider::v-deep(.q-slider__handle--active),
.custom-slider::v-deep(.q-slider__handle--focus) {
  box-shadow: 0 0 6px rgba(126, 87, 194, 0.7);
  /* Purple glow effect */
}

/* For the active range line */
.custom-slider::v-deep(.q-slider__selection) {
  color: #9d68de !important;
  /* Purple color for the active slider range */
}

.notes-input {
  margin-top: 12px;
  background: var(--color-auxiliary);
}

::v-deep(.q-field__native) {
  color: #ffffff !important;
}

::v-deep(.q-field__native::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

.footer-text {
  text-align: center;
}

.footer-buttons {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #1e1e1e;
}

.discard-button {
  color: #999;
  border-color: #999;
}

.save-button {
  background-color: #6a1b9a;
}
</style>
