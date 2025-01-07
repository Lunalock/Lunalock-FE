<script setup lang="ts">
const buttons = [
  { label: "Track Symptoms", icon: "add", route: '/symptoms', action: () => console.log("Track Symptoms clicked!") },
  { label: "Add Notes", icon: "note_alt", route: "/", action: () => console.log("Add Notes clicked!") }
];
</script>

<template>
  <div class="button-group-container">
    <div class="q-mb-sm flex justify-between full-width">
      <q-btn
        v-for="(button, index) in buttons"
        :key="index"
        rounded
        class="track-add-buttons"
        :to="button.route"
        :label="button.label"
        :icon="button.icon"
        @click="button.action"
      >
    </q-btn>
    </div>

    <!-- <q-btn
      unelevated
      rounded
      class="upgrade-pro-button"
      label="Upgrade to Pro"
      color="gradient"
    /> -->
  </div>
</template>

<style scoped>
.button-group-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;
  margin-bottom: 36px;
}

.track-add-buttons {
  width: 45%;
  color: white; /* Ensure good contrast for text/icons */
  background: linear-gradient(to right, #4527A0, #7E57C2) !important; /* Vibrant gradient */
  border: none; /* Remove the subtle border for a cleaner look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Enhance the shadow for more depth */
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 80px;
}


.track-add-buttons:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.upgrade-pro-button {
  width: 100%;
  background: linear-gradient(90deg, #9333ea, #ec4899);
  color: white;
  font-weight: bold;
  box-shadow: 0px 4px 12px rgba(236, 72, 153, 0.5);
  height: 70px;
  border-radius: 12px;
   margin-bottom: 42px;
}
</style>
