<script setup lang="ts">
import { ref } from 'vue'

const leftNavLinks = [
  { icon: 'home', route: '/' },
  { icon: 'analytics', route: '/stats' },
]

const rightNavLinks = [
  { icon: 'add', route: '/symptoms' },
  { icon: 'settings', route: '/settings' },
]

const isPeriodActive = ref(false)

const togglePeriod = () => {
  isPeriodActive.value = !isPeriodActive.value
}
</script>

<template>
  <q-footer class="!bg-gray-900 h-[80px]">
    <div class="flex justify-between items-center mx-auto max-w-sm ">
      <div>
        <q-btn v-for="(link, index) in leftNavLinks" :to="link.route" :flat=true :icon="link.icon" :key="index"
          size="xl" />
      </div>

      <div>
        <q-btn round size="lg" class="-top-4 !bg-gradient-to-r from-indigo-700 to-purple-700"
          :icon="isPeriodActive ? 'pause' : 'play_arrow'" @click="togglePeriod" />
      </div>

      <div>
        <q-btn v-for="(link, index) in rightNavLinks" :to="link.route" :key="index" :flat=true :icon="link.icon"
          size="xl" />
      </div>
    </div>
  </q-footer>
</template>

<style scoped></style>
