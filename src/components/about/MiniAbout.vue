<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col md:flex-row gap-12">
      <div class="space-y-10 md:max-w-1/2">
        <div class="space-y-4 max-w-lg" ref="headingRef">
          <SectionHeading section="About Us"
            >The ideal way to find your home</SectionHeading
          >
        </div>
        <div class="space-y-6" ref="contentRef">
          <p ref="textRef">
            Wake up to the sound of waves and the smell of salt air in one of
            our stunning coastal homes. Perfect for those seeking a serene
            escape, these properties offer unmatched ocean views and direct
            beach safe neighborhoods, and nearby schools access.
          </p>
          <div ref="buttonRef">
            <ButtonPrimary link="#">Read More</ButtonPrimary>
          </div>
        </div>
      </div>
      <div class="rounded-3xl" ref="imageRef">
        <img
          src="../../assets/images/about-image.jpg"
          alt="about image"
          class="rounded-3xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
let tl: gsap.core.Timeline | null = null;

onMounted(() => {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.value,
      start: "top 95%",
      end: "+=300",
      id: "about",
      toggleActions: "restart none none none",
    },
  });

  // Add animations to timeline
  tl.fromTo(
    headingRef.value,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
    }
  )
    .fromTo(
      textRef.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.7"
    )
    .fromTo(
      buttonRef.value,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.7"
    )
    .fromTo(
      imageRef.value,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        duration: 1.2,
      }
    );
});

onUnmounted(() => {
  // Kill the timeline and its ScrollTrigger
  if (tl) {
    tl.kill();
    tl = null;
  }

  // Kill all ScrollTriggers with the "about" id
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === "about") {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
