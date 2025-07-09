<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="space-y-10 flex-1">
        <div ref="headingRef">
          <div class="space-y-6">
            <SectionHeading section="Our Values"
              >The values that drive us forward</SectionHeading
            >
          </div>
        </div>
        <ul class="list-disc px-4 space-y-2" ref="listRef">
          <li>We believe in transparency and honesty</li>
          <li>Our clients' needs and satisfaction are our top priorities</li>
          <li>We strive for perfection in all we do</li>
          <li>Building lasting relationships with clients</li>
          <li>Giving back and supporting the communities where we live</li>
        </ul>
        <div ref="buttonRef">
          <ButtonPrimary link="#">Contact Us</ButtonPrimary>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 flex-[1.5]"
        ref="metricsRef"
      >
        <div
          v-for="(value, index) in values"
          :key="value.id"
          :ref="
            (el) => {
              if (el) cardRefs[index] = el;
            }
          "
        >
          <ValueCard v-bind="value" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";
import {
  initMetricsSectionAnimations,
  cleanupMetricsSectionAnimations,
} from "@/utils/animations/metricsSection";
import ValueCard from "./ValueCard.vue";
import innovation from "@/assets/icons/innovation.svg";
import quality from "@/assets/icons/quality.svg";
import growth from "@/assets/icons/growth.svg";
import community from "@/assets/icons/community.svg";
import interaction from "@/assets/icons/interaction.svg";
import integrity from "@/assets/icons/integrity.svg";

const headingRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const metricsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
const listRef = ref<HTMLElement | null>(null);

let animations: {
  headingAnimation: gsap.core.Tween | null;
  buttonAnimation: gsap.core.Tween | null;
  metricsAnimation: gsap.core.Tween | null;
  listAnimation?: gsap.core.Tween | null; // Add this line
} | null = null;

let listItemRefs: HTMLElement[] = [];

const values = [
  {
    id: 1,
    value: "Innovation",
    img: innovation,
    description:
      "We stay ahead of market trends and embrace new technologies effective solutions for our clients.",
  },
  {
    id: 2,
    value: "Quality",
    img: quality,
    description:
      "We are committed to exceeding expectations by delivering high-quality service, expert advice.",
  },
  {
    id: 3,
    value: "Growth",
    img: growth,
    description:
      "We foster long-term relationships by delivering on our promises and maintaining communication.",
  },
  {
    id: 4,
    value: "Community",
    img: community,
    description:
      "We believe in giving back and making a positive impact in the communities where we work.",
  },
  {
    id: 5,
    value: "Interaction",
    img: interaction,
    description:
      "Our clients are at the heart of our business. We listen, understand their needs, satisfaction.",
  },
  {
    id: 6,
    value: "Integrity",
    img: integrity,
    description:
      "We operate with honesty, and a dedication to doing what’s right in every transaction.",
  },
];

onMounted(async () => {
  await nextTick();
  listItemRefs = listRef.value
    ? Array.from(listRef.value.querySelectorAll("li"))
    : [];
  animations = initMetricsSectionAnimations(
    headingRef.value,
    buttonRef.value,
    metricsRef.value,
    cardRefs.value,
    listItemRefs // Pass list items to animation
  );
});

onUnmounted(() => {
  cleanupMetricsSectionAnimations(animations ?? undefined);
  animations = null;
});
</script>

<style scoped></style>
