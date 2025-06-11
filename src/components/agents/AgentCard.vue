<template>
  <div class="grid gap-3">
    <div class="overflow-hidden rounded-xl">
      <img
        :src="agent.image"
        :alt="`agent ${agent.name}`"
        class="rounded-xl transition-transform duration-500 group-hover:scale-105 aspect-[4/5] md:aspect-[3/4] max-w-full h-auto object-cover"
        style="max-width: 250px"
      />
    </div>
    <div>
      <h3 class="text-xl md:text-2x font-medium">{{ agent.name }}</h3>
      <small>{{ agent.role }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Agent } from "@/utils/fetchAgents";
defineProps<{ agent: Agent }>();
</script>

<style scoped></style>
