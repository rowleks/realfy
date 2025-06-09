<template>
  <div class="space-y-4 md:h-[450px]">
    <div class="space-y-6">
      <SectionHeading :section="'Step-' + step.id">{{
        step.title
      }}</SectionHeading>
    </div>
    <p>{{ step.description }}</p>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from "../headings/SectionHeading.vue";

interface Step {
  id: number;
  title: string;
  description: string;
}

defineProps<{
  step: Step;
}>();
</script>

<style scoped></style>
