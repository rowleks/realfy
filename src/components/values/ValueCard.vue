<template>
  <div class="info-card">
    <div>
      <img :src="img" :alt="value" />
    </div>
    <div class="space-y-2">
      <h3 class="text-xl md:text-3xl text-black font-medium">{{ value }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  value: string;
  img: string;
  description: string;
}>();
</script>

<style scoped></style>
