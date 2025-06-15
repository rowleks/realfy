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
import {
  initMiniAboutAnimations,
  cleanupMiniAboutAnimations,
} from "@/utils/animations/miniAbout";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
let tl: gsap.core.Timeline | null = null;

onMounted(() => {
  tl = initMiniAboutAnimations(
    headingRef.value,
    textRef.value,
    buttonRef.value,
    imageRef.value
  );
});

onUnmounted(() => {
  cleanupMiniAboutAnimations(tl);
  tl = null;
});
</script>

<style scoped></style>
