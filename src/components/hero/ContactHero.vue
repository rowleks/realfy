<template>
  <div>
    <section>
      <div class="space-y-4 text-center wrapper px-4">
        <div ref="headingRef">
          <PageHeading subTitle="Get in Touch">Contact</PageHeading>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          <ContactCard
            :icon="AddressSvg"
            title="Address"
            content="123 Main Street, San Francisco, CA"
          />
          <ContactCard
            :icon="MailSvg"
            title="Email"
            content="info@realfy.com"
          />
          <ContactCard
            :icon="PhoneSvg"
            title="Phone"
            content="+1 (555) 123-4567"
          />
        </div>
        <div ref="imageRef" class="rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d403760.5698387298!2d-122.43759999999999!3d37.7577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1752183830075!5m2!1sen!2sbd"
            width="800"
            height="600"
            style="border: 0"
            allow="fullscreen"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="rounded-3xl w-full"
          ></iframe>
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
import AddressSvg from "../svg/AddressSvg.vue";
import MailSvg from "../svg/MailSvg.vue";
import PhoneSvg from "../svg/PhoneSvg.vue";
import ContactCard from "../contact/ContactCard.vue";

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
