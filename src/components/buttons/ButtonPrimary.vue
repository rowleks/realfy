<template>
  <a :href="link || '#'" class="btn">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps(["link"]);
</script>

<style scoped></style>
