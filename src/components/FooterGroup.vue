<script setup lang="ts">
import { ref } from 'vue'

const leftNavLinks = [
  { icon: 'home', route: '/' },
  { icon: 'analytics', route: '/stats' },
]

const rightNavLinks = [
  { icon: 'event', route: '/calendar' },
  { icon: 'settings', route: '/settings' },
]

const isPeriodActive = ref(false)

const togglePeriod = () => {
  isPeriodActive.value = !isPeriodActive.value
}
</script>

<template>
  <q-footer id="foo">
    <div class="flex justify-between items-center mx-auto max-w-sm ">
      <div>
        <q-btn v-for="(link, index) in leftNavLinks" :flat=true class="fa-solid fa-chart-simple text-xl"
          :icon="link.icon" :key="index" />
      </div>

      <div>
        <q-btn round class="fa-solid fa-moon text-xl -rotate-12 -top-4 bg-gradient-to-r from-indigo-700 to-purple-700"
          :icon="isPeriodActive ? 'pause' : 'nightlight_round'" @click="togglePeriod" />
      </div>

      <div>
        <q-btn v-for="(link, index) in rightNavLinks" :key="index" :flat=true class="fa-solid fa-chart-simple text-xl"
          :icon="link.icon" />
      </div>
    </div>
  </q-footer>
</template>

<style scoped></style>
