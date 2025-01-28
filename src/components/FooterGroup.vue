<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar()

$q.screen.setSizes({ sm: 354, md: 500, lg: 1000, xl: 2000 })

const qButtonSize = (sizeOne: string, sizeTwo: string) => {
  return $q.screen.lt.sm ? sizeOne : sizeTwo
}

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
          :size="qButtonSize('lg', 'xl')" />
      </div>

      <div>
        <q-btn round :size="qButtonSize('md', 'xl')" class="-top-4 !bg-gradient-to-r from-indigo-700 to-purple-700"
          :icon="isPeriodActive ? 'pause' : 'play_arrow'" @click="togglePeriod" />
      </div>

      <div>
        <q-btn v-for="(link, index) in rightNavLinks" :to="link.route" :key="index" :flat=true :icon="link.icon"
          :size="qButtonSize('lg', 'xl')" />
      </div>
    </div>
  </q-footer>
</template>

<style scoped></style>
