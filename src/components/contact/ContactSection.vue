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
let headingAnimation: gsap.core.Tween | null = null;
let textAnimation: gsap.core.Tween | null = null;
let buttonAnimation: gsap.core.Tween | null = null;
let imageAnimation: gsap.core.Tween | null = null;

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
          id: "contact-heading",
        },
      }
    );
  }

  // Text animation
  if (textRef.value) {
    textAnimation = gsap.fromTo(
      textRef.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: contentRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "contact-text",
        },
      }
    );
  }

  // Button animation
  if (buttonRef.value) {
    buttonAnimation = gsap.fromTo(
      buttonRef.value,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          trigger: contentRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "contact-button",
        },
      }
    );
  }

  // Image animation
  if (imageRef.value) {
    imageAnimation = gsap.fromTo(
      imageRef.value,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: imageRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "contact-image",
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
  if (textAnimation) {
    textAnimation.kill();
    textAnimation = null;
  }
  if (buttonAnimation) {
    buttonAnimation.kill();
    buttonAnimation = null;
  }
  if (imageAnimation) {
    imageAnimation.kill();
    imageAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "contact-heading" ||
      trigger.vars.id === "contact-text" ||
      trigger.vars.id === "contact-button" ||
      trigger.vars.id === "contact-image"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
