<template>
  <section>
    <div class="space-y-20">
      <div class="text-center space-y-4 max-w-lg mx-auto">
        <SectionHeading section="Our process"
          >Find your dream house & follow our process</SectionHeading
        >
      </div>
      <div class="flex flex-col md:flex-row gap-10 px-5 max-w-[75rem] mx-auto">
        <div class="space-y-10 flex-1 overflow-y-auto md:max-h-[450px] md:pr-4">
          <template v-for="step in steps" :key="step.id">
            <StepCard
              :step="step"
              :ref="
                (el) => {
                  if (el) stepRefs[step.id] = el;
                }
              "
              @visibility-change="handleVisibilityChange(step.id, $event)"
            />
            <div class="rounded-3xl flex-1 md:hidden mt-8">
              <img :src="step.image" alt="step" class="rounded-3xl" />
            </div>
          </template>
        </div>
        <div class="rounded-3xl flex-1 hidden md:block">
          <img
            :src="currentStepImage"
            :alt="'step' + currentStepId"
            class="rounded-3xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";
import StepCard from "./StepCard.vue";
import step1Img from "@/assets/images/step1.jpg";
import step2Img from "@/assets/images/step2.jpg";
import step3Img from "@/assets/images/step3.jpg";

const currentStepId = ref(1);
const currentStepImage = ref(step1Img);
const stepRefs = ref<Record<number, any>>({});

const steps = [
  {
    id: 1,
    title: "Look for your dream home in your local area today",
    image: step1Img,
    description:
      "Explore a carefully curated selection of stunning homes near you that perfectly match your unique lifestyle, preferences, and specific needs, offering the ideal balance of comfort, style, luxury, and location. Each property is handpicked to provide the perfect combination.",
  },
  {
    id: 2,
    title: "Schedule a meeting with one of our agents",
    image: step2Img,
    description:
      "Book a personalized meeting with one of our experienced agents to thoroughly explore all your options, discuss your needs, and find the perfect property that fits your lifestyle and budget.",
  },
  {
    id: 3,
    title: "A month or less, get your ideal home",
    image: step3Img,
    description:
      "Secure your dream home in a month or less with our expert assistance, personalized guidance, and streamlined processes, ensuring a smooth, stress-free, and successful journey tailored specifically to your needs and preferences from start to finish.",
  },
];

const handleVisibilityChange = (stepId: number, isVisible: boolean) => {
  if (isVisible) {
    currentStepId.value = stepId;
    currentStepImage.value =
      steps.find((step) => step.id === stepId)?.image || step1Img;
  }
};
</script>

<style scoped></style>
