<template>
  <TitleButton>{{ section }}</TitleButton>
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import TitleButton from "../buttons/TitleButton.vue";
defineProps(["section"]);
</script>

<style scoped></style>
