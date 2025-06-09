<template>
  <div ref="cardRef" class="space-y-4 md:h-[450px]">
    <div class="space-y-6">
      <SectionHeading :section="'Step-' + step.id">{{
        step.title
      }}</SectionHeading>
    </div>
    <p>{{ step.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";

interface Step {
  id: number;
  title: string;
  description: string;
}

defineProps<{
  step: Step;
}>();

const emit = defineEmits<{
  (e: "visibility-change", isVisible: boolean): void;
}>();

const cardRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        emit("visibility-change", entry.isIntersecting);
      });
    },
    {
      threshold: 0.6,
      rootMargin: "-10% 0px",
    }
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped></style>
