<template>
  <RouterLink :to="link || '#'" class="btn">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
defineProps(["link"]);
</script>

<style scoped></style>
