<script setup lang="ts">

</script>

<template>
    <q-header class="header">
      <div class="header-left">
        <h1 class="gradient-text">LunaLock</h1>
      </div>
      <div class="header-right">
        <button class="icon-button">
          <span class="material-icons">notifications</span>
        </button>
      </div>
    </q-header>
  </template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-dark);
  padding: 0 20px;
  height: 50px;
}

.header-right {
  display: flex;
  gap: 15px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.icon-button:hover {
  background-color: var(--color-gray-card);
}

.material-icons {
  font-size: 24px;
  color: var(--color-text-light);
}

.profile-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--color-purple-border);
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-icon:hover {
  transform: scale(1.1);
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