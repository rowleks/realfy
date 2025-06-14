<template>
  <div class="max-w-2xl" ref="faqsRef">
    <div
      v-for="(faq, idx) in faqs"
      :key="idx"
      class="mb-4 border-b border-[#e8e8e8] pb-4"
      :ref="
        (el) => {
          if (el) faqRefs[idx] = el;
        }
      "
    >
      <button
        class="bg-none border-none font-medium text-xl cursor-pointer w-full text-left py-2"
        @click="toggle(idx)"
      >
        {{ faq.question }}
      </button>
      <transition name="faq-fade">
        <div
          v-if="openFaqs[idx]"
          class="mt-2 text-base md:text-lg text-gray-600"
        >
          {{ faq.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Faq {
  question: string;
  answer: string;
}

const faqsRef = ref<HTMLElement | null>(null);
const faqRefs = ref<any[]>([]);
let faqsAnimation: gsap.core.Tween | null = null;

const faqs = ref<Faq[]>([
  {
    question: "How long does it take to buy a home?",
    answer:
      "The home buying process typically takes between 30 to 60 days once you have an accepted offer, but the timeline can vary depending on factors like financing, inspections, and negotiations.",
  },
  {
    question: "How much should I save for a down payment?",
    answer:
      "A common recommendation is to save at least 20% of the home's price for a down payment, but some loan programs allow for lower down payments. Consider additional costs like closing fees and moving expenses.",
  },
  {
    question: "Do I need a real estate agent to sell my home?",
    answer:
      "While it's possible to sell your home without an agent, working with a real estate professional can help you navigate pricing, marketing, negotiations, and paperwork more efficiently.",
  },
  {
    question: "What should I look for during a home inspection?",
    answer:
      "During a home inspection, pay attention to the condition of the roof, foundation, plumbing, electrical systems, HVAC, and look for signs of water damage or structural issues.",
  },
  {
    question: "What is the first step in buying a home?",
    answer:
      "The first step is usually to assess your finances and get pre-approved for a mortgage. This helps you understand your budget and shows sellers you are a serious buyer.",
  },
]);

const openFaqs = ref<boolean[]>(Array(faqs.value.length).fill(false));

function toggle(idx: number) {
  openFaqs.value[idx] = !openFaqs.value[idx];
}

onMounted(() => {
  // Initialize FAQ animations
  if (faqsRef.value && faqRefs.value.length > 0) {
    faqsAnimation = gsap.fromTo(
      faqRefs.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: faqsRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "faqs-items",
        },
      }
    );
  }
});

onUnmounted(() => {
  // Kill animations
  if (faqsAnimation) {
    faqsAnimation.kill();
    faqsAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === "faqs-items") {
      trigger.kill();
    }
  });
});
</script>

<style scoped>
.faq-fade-enter-active,
.faq-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.faq-fade-enter-from,
.faq-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.faq-fade-enter-to,
.faq-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
