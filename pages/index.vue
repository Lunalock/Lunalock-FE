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
  <q-layout>
    <q-page-container>
      <HeaderTop />
      <q-page class="q-pa-md">
        <Statistics />
        <Calendar />
        <ButtonGroup />
      </q-page>
      <FooterGroup />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
::v-deep(.q-page-container){
  padding-bottom: 36px !important;
}

</style>
