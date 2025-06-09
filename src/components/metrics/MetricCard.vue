<template>
  <div
    class="space-y-4 p-5 rounded-xl md:rounded-3xl text-[#333] md:py-7 border-1 border-[#e8e8e8] bg-[#f7f7f7]"
  >
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
