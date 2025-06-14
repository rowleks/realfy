<template>
  <footer class="bg-black text-white pb-10 py-10 md:py-20">
    <div class="max-w-[75rem] mx-auto px-5 space-y-10">
      <div class="flex flex-col md:flex-row gap-8 lg:gap-10">
        <div class="flex-1" ref="formRef">
          <ContactForm />
        </div>
        <div class="flex-[1.2]" ref="imageRef">
          <img src="../../assets/images/footer-image.png" alt="footer image" />
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        ref="bottomRef"
      >
        <div class="space-y-1" ref="logoRef">
          <img
            src="../../assets/images/realfy-logo-white.svg"
            alt="realfy logo"
          />
          <p>Making your dream home a reality.</p>
        </div>

        <div class="flex items-center gap-4 max-sm:mx-auto" ref="socialRef">
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/fb-icon.svg"
              alt="facebook icon"
              width="24"
              height="24"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/linkedin-icon.svg"
              alt="linkedin icon"
              width="24"
              height="24"
            />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/x-logo.jpg"
              alt="x icon"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
      <div class="text-center" ref="copyrightRef">
        <small>&copy;2025 All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../contact/ContactForm.vue";

gsap.registerPlugin(ScrollTrigger);

const formRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
const logoRef = ref<HTMLElement | null>(null);
const socialRef = ref<HTMLElement | null>(null);
const copyrightRef = ref<HTMLElement | null>(null);
let formAnimation: gsap.core.Tween | null = null;
let imageAnimation: gsap.core.Tween | null = null;
let logoAnimation: gsap.core.Tween | null = null;
let socialAnimation: gsap.core.Tween | null = null;
let copyrightAnimation: gsap.core.Tween | null = null;

onMounted(() => {
  // Form animation
  if (formRef.value) {
    formAnimation = gsap.fromTo(
      formRef.value,
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
          trigger: formRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "footer-form",
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
        delay: 0.4,
        scrollTrigger: {
          trigger: imageRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "footer-image",
        },
      }
    );
  }

  // Logo section animation
  if (logoRef.value) {
    logoAnimation = gsap.fromTo(
      logoRef.value,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: logoRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "footer-logo",
        },
      }
    );
  }

  // Social icons animation
  if (socialRef.value) {
    socialAnimation = gsap.fromTo(
      socialRef.value,
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
          trigger: socialRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "footer-social",
        },
      }
    );
  }

  // Copyright animation
  if (copyrightRef.value) {
    copyrightAnimation = gsap.fromTo(
      copyrightRef.value,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1,
        scrollTrigger: {
          trigger: copyrightRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "footer-copyright",
        },
      }
    );
  }
});

onUnmounted(() => {
  // Kill animations
  if (formAnimation) {
    formAnimation.kill();
    formAnimation = null;
  }
  if (imageAnimation) {
    imageAnimation.kill();
    imageAnimation = null;
  }
  if (logoAnimation) {
    logoAnimation.kill();
    logoAnimation = null;
  }
  if (socialAnimation) {
    socialAnimation.kill();
    socialAnimation = null;
  }
  if (copyrightAnimation) {
    copyrightAnimation.kill();
    copyrightAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "footer-form" ||
      trigger.vars.id === "footer-image" ||
      trigger.vars.id === "footer-logo" ||
      trigger.vars.id === "footer-social" ||
      trigger.vars.id === "footer-copyright"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
