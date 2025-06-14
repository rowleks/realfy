<template>
  <section>
    <div class="space-y-12">
      <div ref="headingRef">
        <div class="text-center space-y-4 max-w-md mx-auto">
          <SectionHeading section="Property Categories"
            >Start your journey to your ideal property</SectionHeading
          >
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 max-w-[75rem] mx-auto"
        ref="categoriesRef"
      >
        <template v-for="(category, index) in categories" :key="category.title">
          <a
            href="#"
            class="group"
            :ref="
              (el) => {
                if (el) cardRefs[index] = el;
              }
            "
          >
            <CategoriesCard :category="category" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../headings/SectionHeading.vue";
import CategoriesCard from "./CategoriesCard.vue";
import ecofriendlyImg from "@/assets/images/ecofriendly.jpg";
import commercialImg from "@/assets/images/commercial.jpg";
import luxuryImg from "@/assets/images/luxury.jpg";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
const categoriesRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
let headingAnimation: gsap.core.Tween | null = null;
let categoriesAnimation: gsap.core.Tween | null = null;

const categories = [
  {
    image: luxuryImg,
    title: "Eco-Friendly Homes",
    description:
      "Sustainable living in eco-friendly homes equipped with cutting-edge green technologies.",
  },
  {
    image: commercialImg,
    title: "Commercial Properties",
    description:
      "Commercial buildings intended to provide visitors with comfort and convenience.",
  },
  {
    image: ecofriendlyImg,
    title: "Luxury Homes",
    description:
      "Elegant life in opulent mansions and estates equipped with the best conveniences.",
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
          start: () => {
            const width = window.innerWidth;
            if (width < 768) {
              return "top 95%";
            } else {
              return "top 85%";
            }
          },
          toggleActions: "restart none none none",
          id: "categories-heading",
        },
      }
    );
  }

  // Categories animation
  if (categoriesRef.value && cardRefs.value.length > 0) {
    categoriesAnimation = gsap.fromTo(
      cardRefs.value,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        delay: 0.5,
        scrollTrigger: {
          trigger: categoriesRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "categories-cards",
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
  if (categoriesAnimation) {
    categoriesAnimation.kill();
    categoriesAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "categories-heading" ||
      trigger.vars.id === "categories-cards"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
