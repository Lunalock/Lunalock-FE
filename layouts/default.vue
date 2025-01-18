<script lang="ts" setup>
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderTop />

    <q-page-container>
      <q-page class="q-mx-auto">
        <slot />
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style scoped>
::v-deep(.q-page) {
  max-width: 1080px;
}
</style>