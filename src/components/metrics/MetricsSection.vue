<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="space-y-10 flex-1">
        <div ref="headingRef">
          <div class="space-y-6">
            <SectionHeading section="Metrics"
              >The numbers speak for themselves</SectionHeading
            >
          </div>
        </div>
        <div ref="buttonRef">
          <ButtonPrimary link="#">Contact Us</ButtonPrimary>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 flex-[1.5]"
        ref="metricsRef"
      >
        <div
          v-for="(metric, index) in metrics"
          :key="metric.id"
          :ref="
            (el) => {
              if (el) cardRefs[index] = el;
            }
          "
        >
          <MetricCard v-bind="metric" />
        </div>
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
import MetricCard from "./MetricCard.vue";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const metricsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
let headingAnimation: gsap.core.Tween | null = null;
let buttonAnimation: gsap.core.Tween | null = null;
let metricsAnimation: gsap.core.Tween | null = null;

const metrics = [
  {
    id: 1,
    value: "200+",
    label: "Properties",
    description:
      "Discover the key figures that highlight our impact in the real estate market. From satisfied clients to successful transactions.",
  },
  {
    id: 2,
    value: "300+",
    label: "Satisfied Users",
    description:
      "Take a closer look at the statistics that reflect our growth, success and dedication to helping our clients achieve their real estate goals.",
  },
  {
    id: 3,
    value: "100%",
    label: "Happy Clients",
    description:
      "From closed deals to client satisfaction ratings, our numbers showcase the impact we've made in the real estate industry.",
  },
  {
    id: 4,
    value: "900+",
    label: "Followers",
    description:
      "Explore the numbers behind our real estate success, showcasing the trust clients place in us and the results we consistently deliver.",
  },
];

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
          id: "metrics-heading",
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
        delay: 0.5,
        scrollTrigger: {
          trigger: buttonRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "metrics-button",
        },
      }
    );
  }

  // Metrics cards animation
  if (metricsRef.value && cardRefs.value.length > 0) {
    metricsAnimation = gsap.fromTo(
      cardRefs.value,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8,
        scrollTrigger: {
          trigger: metricsRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "metrics-cards",
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
  if (buttonAnimation) {
    buttonAnimation.kill();
    buttonAnimation = null;
  }
  if (metricsAnimation) {
    metricsAnimation.kill();
    metricsAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "metrics-heading" ||
      trigger.vars.id === "metrics-button" ||
      trigger.vars.id === "metrics-cards"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
