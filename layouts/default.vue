<script lang="ts" setup>
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderTop />

    <q-page-container>
      <q-page class="q-mx-auto q-px-sm">
        <slot />
      </q-page>
    </q-page-container>

    <FooterGroup />
  </q-layout>
</template>

<style scoped>
::v-deep(.q-page) {
  max-width: 1080px;
}
</style>