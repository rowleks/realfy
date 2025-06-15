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
import SectionHeading from "../headings/SectionHeading.vue";
import CategoriesCard from "./CategoriesCard.vue";
import ecofriendlyImg from "@/assets/images/ecofriendly.jpg";
import commercialImg from "@/assets/images/commercial.jpg";
import luxuryImg from "@/assets/images/luxury.jpg";
import {
  initCategoriesAnimations,
  cleanupCategoriesAnimations,
} from "@/utils/animations/categories";

const headingRef = ref<HTMLElement | null>(null);
const categoriesRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);

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

let animations: {
  headingAnimation: gsap.core.Tween | null;
  categoriesAnimation: gsap.core.Tween | null;
} | null = null;

onMounted(() => {
  animations = initCategoriesAnimations(
    headingRef.value,
    categoriesRef.value,
    cardRefs.value
  );
});

onUnmounted(() => {
  cleanupCategoriesAnimations();
  animations = null;
});
</script>

<style scoped></style>
