<template>
  <div>
    <section>
      <div class="space-y-4 text-center wrapper">
        <div ref="headingRef">
          <PageHeading subTitle="Buy & Sell Your Dream"
            >REAL-ESTATE</PageHeading
          >
        </div>
        <div ref="imageRef">
          <img
            src="../../assets/images/hero-image.png"
            alt="Hero Image"
            class="object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeading from "../headings/PageHeading.vue";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;
let imageAnimation: gsap.core.Tween | null = null;

onMounted(() => {
  // Heading animation
  headingAnimation = gsap.fromTo(
    headingRef.value,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: headingRef.value,
        start: "top 80%",
        toggleActions: "play none restart none",
        id: "hero-heading",
      },
    }
  );

  // Image animation
  imageAnimation = gsap.fromTo(
    imageRef.value,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: imageRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
        id: "hero-image",
      },
    }
  );
});

onUnmounted(() => {
  // Kill animations
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }
  if (imageAnimation) {
    imageAnimation.kill();
    imageAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "hero-heading" ||
      trigger.vars.id === "hero-image"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
