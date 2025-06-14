<template>
  <section>
    <div class="space-y-20">
      <div ref="headingRef">
        <div class="text-center space-y-4 max-w-lg mx-auto">
          <SectionHeading section="Our process"
            >Find your dream house & follow our process</SectionHeading
          >
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-10 px-5 max-w-[75rem] mx-auto">
        <div
          class="space-y-10 flex-1 overflow-y-auto md:max-h-[450px] md:pr-4 custom-scrollbar scroll-snap-y"
        >
          <template v-for="step in steps" :key="step.id">
            <div class="scroll-snap-align">
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
            </div>
          </template>
        </div>
        <div class="rounded-3xl flex-1 hidden md:block">
          <transition name="fade">
            <img
              :key="currentStepId"
              :src="currentStepImage"
              :alt="'step' + currentStepId"
              class="rounded-3xl"
            />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../headings/SectionHeading.vue";
import StepCard from "./StepCard.vue";
import step1Img from "@/assets/images/step1.jpg";
import step2Img from "@/assets/images/step2.jpg";
import step3Img from "@/assets/images/step3.jpg";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;

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
          id: "process-heading",
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

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === "process-heading") {
      trigger.kill();
    }
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Custom subtle scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e0e7ef #f8fafc;
}

/* For Chrome, Edge, and Safari */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background: #f8fafc;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e0e7ef;
  border-radius: 6px;
  transition: background 0.3s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}

.custom-scrollbar::-webkit-scrollbar-corner {
  background: transparent;
}

/* Hide scrollbar arrows (buttons) */
.custom-scrollbar::-webkit-scrollbar-button {
  display: none;
  height: 0;
  width: 0;
}

/* Scroll snap styles */
.scroll-snap-y {
  scroll-snap-type: y mandatory;
}

.scroll-snap-align {
  scroll-snap-align: start;
}
</style>
