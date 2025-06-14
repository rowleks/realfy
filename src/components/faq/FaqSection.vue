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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../headings/SectionHeading.vue";
import Faqs from "./Faqs.vue";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;

onMounted(() => {
  // Heading animation
  if (headingRef.value) {
    headingAnimation = gsap.fromTo(
      headingRef.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "faq-section-heading",
        },
      }
    );
  }
});

onUnmounted(() => {
  // Kill animations
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === "faq-section-heading") {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
