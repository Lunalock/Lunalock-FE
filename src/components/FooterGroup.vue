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
  <q-footer id="footer-bottom" class="!bg-[#111827]">
    <div class="flex justify-between items-center mx-auto max-w-sm ">
      <div>
        <q-btn v-for="(link, index) in leftNavLinks" :flat=true :icon="link.icon" :key="index" size="lg" />
      </div>

      <div>
        <q-btn round size="lg" class="-top-4 gradient-btn !bg-gradient-to-r from-indigo-700 to-purple-700"
          :icon="isPeriodActive ? 'pause' : 'nightlight_round'" @click="togglePeriod" />
      </div>

      <div>
        <q-btn v-for="(link, index) in rightNavLinks" :key="index" :flat=true :icon="link.icon" size="lg" />
      </div>
    </div>
  </q-footer>
</template>

<style scoped></style>
