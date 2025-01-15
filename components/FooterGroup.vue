<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const currentRoute = router.currentRoute

// Split nav items between left and right
const leftNavLinks = [
  { label: 'Home', icon: 'home', route: '/' },
  { label: 'Stats', icon: 'analytics', route: '/stats' },
]

const rightNavLinks = [
  { label: 'Calendar', icon: 'event', route: '/calendar' },
  { label: 'Settings', icon: 'settings', route: '/settings' },
]

// Dummy state to indicate whether a period is active
const isPeriodActive = ref(false)

// Navigate to route
const navigateTo = (route: string) => {
  router.push(route)
}

// Toggle period active/inactive
const togglePeriod = () => {
  isPeriodActive.value = !isPeriodActive.value
}
</script>

<template>
  <q-footer class="fixed bottom-0 left-0 right-0 bg-[#2A2A38] h-20  max-w-md mx-auto">
    <div class="footer-inner row no-wrap items-center justify-between">
      <!-- Left Tabs -->
      <q-tabs class="tabs-left row no-wrap" dense>
        <q-tab
          v-for="(link, index) in leftNavLinks"
          :key="index"
          :name="link.route"
          @click="navigateTo(link.route)"
          class="footer-tab"
        >
          <template #default>
            <div
              :class="[
                'footer-tab-item',
                currentRoute.path === link.route ? 'active-tab' : ''
              ]"
            >
              <q-icon :name="link.icon" class="fa-solid fa-chart-simple text-xl footer-icon" />
              <span class="footer-label">{{ link.label }}</span>
            </div>
          </template>
        </q-tab>
      </q-tabs>

      <!-- Right Tabs -->
      <q-tabs class="tabs-right row no-wrap" dense>
        <q-tab
          v-for="(link, index) in rightNavLinks"
          :key="index"
          :name="link.route"
          @click="navigateTo(link.route)"
          class="footer-tab"
        >
          <template #default>
            <div
              :class="[
                'footer-tab-item',
                currentRoute.path === link.route ? 'active-tab' : ''
              ]"
            >
              <q-icon :name="link.icon" class="fa-solid fa-chart-simple text-xl footer-icon" />
              <span class="footer-label">{{ link.label }}</span>
            </div>
          </template>
        </q-tab>
      </q-tabs>

      <!-- Floating Period Button -->
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg moon-container">
        <q-btn
          round
          class="fa-solid fa-moon text-white text-xl moon-icon"
          :icon="isPeriodActive ? 'pause' : 'nightlight_round'"
          @click="togglePeriod"
        />
      </div>
    </div>
  </q-footer>
</template>

<style scoped>
.footer-container {
  background-color: var(--color-background-dark);
  border-top: 1px solid var(--color-border);
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

/* Wrap tabs and the button in a positioning container */
.footer-inner {
  position: relative;
  min-height: 56px; /* Just enough to fit the tabs */
}

/* Floating button container */
.period-button-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -25px; /* Adjust this for how much the button sticks out */
  z-index: 999;
}

/* The tab item styles */
.footer-tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color-secondary); /* Default text color for inactive links */
  transition: color 0.3s ease-in-out;
  font-size: 16px !important;
}

.footer-tab-item.active-tab {
  color: #C084FC; /* Highlight color for active link */
}

.footer-label {
  font-size: 0.75rem; /* Match your desired size */
  margin-top: 0.25rem;
}

.footer-icon{
  font-size: 32px;
  margin-top: 12px;
  
}
@media (max-width: 368px) {
  .footer-icon {
    font-size: 16px;
    margin-top: 20px;
  }

  .moon-container {
    width: 1rem !important;  /* e.g., 40px */
    height: 1rem !important; /* e.g., 40px */
  }
}

.moon-icon{
  background: linear-gradient(to right, #4527A0, #7E57C2);
  transform: rotate(-15deg);
}

.footer-tab-item:hover {
  color: var(--text-color-hover); /* Optional hover color */
}
</style>
