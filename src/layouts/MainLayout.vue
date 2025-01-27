<script lang="ts" setup>
import HeaderTop from 'src/components/HeaderTop.vue';
import FooterGroup from 'src/components/FooterGroup.vue';
</script>

<template>
  <q-layout view="hhh lpr fFf" class="bg-gray-950 text-white">
    <HeaderTop />

    <q-page-container class="!pb-30">
      <q-page class="q-mx-auto q-px-sm">
        <router-view /> <!-- Replace <slot /> with <router-view /> -->
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
