<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col md:flex-row gap-8 md:justify-between lg:gap-20">
      <div class="max-w-sm">
        <div ref="headingRef">
          <div class="space-y-6">
            <SectionHeading section="FAQ"
              >Frequently Asked Questions</SectionHeading
            >
          </div>
        </div>
      </div>
      <div class="md:w-3/5">
        <Faqs />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";
import Faqs from "./Faqs.vue";
import {
  initFaqSectionAnimations,
  cleanupFaqSectionAnimations,
} from "@/utils/animations/faqSection";

const headingRef = ref<HTMLElement | null>(null);

let animations: {
  headingAnimation: gsap.core.Tween | null;
} | null = null;

onMounted(() => {
  animations = initFaqSectionAnimations(headingRef.value);
});

onUnmounted(() => {
  cleanupFaqSectionAnimations();
  animations = null;
});
</script>

<style scoped></style>
