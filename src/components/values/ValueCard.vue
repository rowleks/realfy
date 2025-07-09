<template>
  <div
    class="space-y-8 p-5 rounded-xl md:rounded-3xl text-[#333] md:py-7 border-1 border-[#e8e8e8] bg-[#f7f7f7]"
  >
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
