<script setup lang="ts">

</script>

<template>
  <q-header class="q-mx-auto header">
    <q-toolbar class="justify-between">
      <div class="gradient-text">
        <h1>
        LunaLock
        </h1>
      </div>

      <q-btn class="icon-button" :unelevated=true>
        <span class="material-icons">notifications</span>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header {
  background: transparent;
  max-width: 1080px;
  display: block;
}

.material-icons {
  font-size: 24px;
  color: var(--color-text-light);
}

.gradient-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #B18EEA, #F497B6); 
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>