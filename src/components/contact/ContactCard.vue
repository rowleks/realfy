<template>
  <div class="info-card">
    <div class="flex gap-4">
      <component :is="icon" class="w-7 h-7" />
      <div class="space-y-4">
        <h3 class="text-xl md:text-2xl font-semibold text-left">{{ title }}</h3>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type Component } from "vue";

defineProps<{
  icon: Component;
  title: string;
  content: string;
}>();
</script>

<style scoped></style>
