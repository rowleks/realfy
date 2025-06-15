<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col md:flex-row-reverse gap-20">
      <div class="space-y-10 md:max-w-1/2">
        <div ref="headingRef">
          <div class="space-y-4 max-w-lg">
            <SectionHeading section="Why choose us"
              >Why we are the best in Real Estate market</SectionHeading
            >
          </div>
        </div>
        <div class="space-y-6" ref="contentRef">
          <p ref="textRef">
            With our unmatched expertise, personalized service, and deep
            knowledge of the real estate market, we make your home buying or
            selling experience seamless and stress-free. Our dedicated team of
            professionals listens to your needs, provides tailored.
          </p>
          <div ref="buttonRef">
            <ButtonPrimary link="#">Contact Us</ButtonPrimary>
          </div>
        </div>
      </div>
      <div class="rounded-3xl" ref="imageRef">
        <img
          src="../../assets/images/contact-image.jpg"
          alt="contact image"
          class="rounded-3xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";
import {
  initContactSectionAnimations,
  cleanupContactSectionAnimations,
} from "@/utils/animations/contactSection";

const headingRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);

let animations: {
  headingAnimation: gsap.core.Tween | null;
  textAnimation: gsap.core.Tween | null;
  buttonAnimation: gsap.core.Tween | null;
  imageAnimation: gsap.core.Tween | null;
} | null = null;

onMounted(() => {
  animations = initContactSectionAnimations(
    headingRef.value,
    textRef.value,
    buttonRef.value,
    imageRef.value,
    contentRef.value
  );
});

onUnmounted(() => {
  cleanupContactSectionAnimations();
  animations = null;
});
</script>

<style scoped></style>
