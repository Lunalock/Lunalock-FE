<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const currentRoute = router.currentRoute;

const navLinks = [
  { label: "Home", icon: "home", route: "/" },
  { label: "Stats", icon: "analytics", route: "/stats" },
  { label: "Calendar", icon: "event", route: "/calendar" },
  { label: "Settings", icon: "settings", route: "/settings" },
];

const navigateTo = (route: string) => {
  router.push(route);
};
</script>

<template>
  <q-footer class="footer-container">
    <q-tabs class="w-full justify-around" dense>
      <q-tab
        v-for="(link, index) in navLinks"
        :key="index"
        :name="link.route"
        class="footer-tab"
        @click="navigateTo(link.route)"
      >
        <template v-slot:default>
          <div
            :class="[
              'footer-tab-item',
              currentRoute.path === link.route ? 'active-tab' : ''
            ]"
          >
            <q-icon :name="link.icon" size="28px" />
            <span class="footer-label">{{ link.label }}</span>
          </div>
        </template>
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<style scoped>
.footer-container {
  background-color: var(--color-background-dark);
  border-top: 1px solid var(--color-border);
  padding: 0.5rem 0;
  position: fixed;
}

.footer-tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color-secondary); /* Default text color for inactive links */
  transition: color 0.3s ease-in-out;
  font-size: 16px !important;
  z-index: 10; /* Ensure it's above other elements */
  bottom: 0;
}

.footer-tab-item.active-tab {
  color: #C084FC; /* Highlight color for active link */
}

.footer-label {
  font-size: 0.75rem; /* Match the size from the mockup */
  margin-top: 0.25rem;
}

.footer-tab-item:hover {
  color: var(--text-color-hover); /* Optional hover color */
}
</style>
