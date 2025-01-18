<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const currentRoute = router.currentRoute

const leftNavLinks = [
  { icon: 'home', route: '/' },
  { icon: 'analytics', route: '/stats' },
]

const rightNavLinks = [
  { icon: 'event', route: '/calendar' },
  { icon: 'settings', route: '/settings' },
]

const isPeriodActive = ref(false)

const navigateTo = (route: string) => {
  router.push(route)
}

const togglePeriod = () => {
  isPeriodActive.value = !isPeriodActive.value
}
</script>

<template>
  <q-footer class="bg-[#2A2A38]">
    <div class="flex justify-between items-center mx-auto max-w-sm">
      <div>
        <q-btn 
          v-for="(link) in leftNavLinks"
          :flat=true
          class="fa-solid fa-chart-simple text-xl" 
          :icon="link.icon"
        />
      </div>
      
      <div>
        <q-btn
          round
          class="fa-solid fa-moon text-xl -rotate-12 -top-4 bg-gradient-to-r from-indigo-700 to-purple-700"
          :icon="isPeriodActive ? 'pause' : 'nightlight_round'"
          @click="togglePeriod"
        />
      </div>

      <div>
        <q-btn 
          v-for="(link) in rightNavLinks"
          :flat=true
          class="fa-solid fa-chart-simple text-xl" 
          :icon="link.icon"
        />
      </div>
    </div>
  </q-footer>
</template>

<style scoped>
</style>
