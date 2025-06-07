<template>
  <a :href="link" class="btn">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps(["link", "text"]);
</script>

<style scoped></style>
