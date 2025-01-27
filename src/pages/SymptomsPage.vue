<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedMood = ref<number | null>(null);
const notes = ref('')

const qTextAreaInput = (state: string, placeHolderClass: string, textClass: string) => {
  return !state ? placeHolderClass : textClass
}

const inputDate = ref('');

const moods = [
  { label: "Happy", icon: "sentiment_satisfied_alt", color: "#FFD700" },
  { label: "Sad", icon: "sentiment_dissatisfied", color: "#1E90FF" },
  { label: "Tired", icon: "hotel", color: "#FFA500" },
  { label: "Angry", icon: "sentiment_very_dissatisfied", color: "#FF4500" },
  { label: "Stressed", icon: "mood_bad", color: "#800080" }
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
  <q-bar class="q-pa-md header-bar bg-transparent">
    <q-btn @click="goBack" flat round icon="arrow_back" class="text-white" />
    <q-space />
    <div>
      <div>Track Symptoms</div>
    </div>
    <q-space />
    <q-btn flat round icon="check" class="text-white invisible" />
  </q-bar>
  <div>
    <div>
      <div class="flex justify-between align">
        <div class="content-center">Today</div>
        <div>
          <q-input filled v-model="inputDate" mask="date"
            :input-class="qTextAreaInput(notes, '!text-white/50', '!text-white')" class="!bg-gray-900 !text-white">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer text-white/50">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="inputDate" class="!bg-gray-900 !text-white">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div>
        <div class="font-bold text-xl">How are you feeling?</div>
        <div class="flex justify-around gap-1 q-my-md">
          <q-btn v-for="(mood, index) in moods" :key="index" flat class=" !bg-gray-900 !h-[80px] !w-[60px] !rounded-2xl"
            :class="{ selected: selectedMood === index }" @click="selectMood(index)">
            <q-icon :name="mood.icon" size="32px" :style="{ color: mood.color }" />
            <div class="!text-[10px]">{{ mood.label }}</div>
          </q-btn>
        </div>
      </div>

      <div>
        <div class="font-bold text-xl">Quick Log</div>
        <div class="q-my-md">
          <q-chip v-for="(symptom, index) in quickLog" :key="index" outline
            class="quick-log-chip text-white !bg-gray-900 !border-0 !h-[40px]">
            {{ symptom }}
          </q-chip>
        </div>
      </div>

      <div>
        <div class="font-bold text-xl">Symptoms</div>
        <div class="row q-my-md">
          <q-card v-for="(symptom, index) in sliders" :key="index" class="!rounded-xl m-1  !bg-gray-900 !p-5 !w-full">
            <div class="text-bold">
              <q-icon :name="symptom.icon" class="!text-2xl text-purple-400" />
              {{ symptom.label }}
            </div>
            <q-slider v-model="symptom.value" :min="1" :max="5" snap :step="1" marker-labels color="deep-purple-5" />
          </q-card>
        </div>
      </div>

      <div class="">
        <div class="font-bold text-xl">Notes</div>
        <q-input :input-class="qTextAreaInput(notes, '!text-white/50', '!text-white')" v-model="notes" filled
          type="textarea" placeholder="Add any additional notes about your day..." class=" !bg-gray-900 !text-white"
          color="deep-purple-5" />
        <div class=" q-mt-md q-mb-md text-purple-300">
          Tracking regularly helps you stay in tune with your body 💜
        </div>
      </div>
      <div class="flex gap-4">
        <q-btn flat outline label="Discard"
          class="flex-1 py-3 !rounded-xl !bg-gray-800 text-gray-400 !hover:bg-gray-800/80 transition-colors !h-12" />
        <q-btn unelevated label="Save"
          class="flex-1 py-3 !rounded-xl !bg-purple-600 text-white !hover:bg-purple-700 transition-colors !h-12" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
