<script setup>
import { usePeriodStore } from '#imports';

const periodStore = usePeriodStore();
const { periods, pastMoods } = storeToRefs(periodStore);
const selectedDate = ref(null);
const moods = ['😀', '😐', '😢', '😡', '🥳'];
const selectedMood = ref('');
const pastPeriods = ref()

const setPeriodToToday = () => {
  selectedDate.value = new Date().toISOString().split('T')[0];
};

const selectMood = (mood) => {
  selectedMood.value = mood;
};

onMounted(async () => {
  await periodStore.fetchPeriods();
  await periodStore.fetchMoods();
});
</script>

<template>
  <Statistics />
  <Calendar />
  <ButtonGroup />
</template>

<style scoped>
</style>
