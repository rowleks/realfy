<template>
  <div class="max-w-2xl">
    <div
      v-for="(faq, idx) in faqs"
      :key="idx"
      class="mb-4 border-b border-[#e8e8e8] pb-4"
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
import { ref } from "vue";

interface Faq {
  question: string;
  answer: string;
}

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
