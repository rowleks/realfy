<template>
  <div class="info-card">
    <div class="space-y-1 text-center">
      <h2 class="text-2xl md:text-4xl text-black font-semibold">{{ value }}</h2>
      <span class="text-sm font-medium">{{ label }}</span>
    </div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  value: string;
  label: string;
  description: string;
}>();
</script>

<style scoped></style>
