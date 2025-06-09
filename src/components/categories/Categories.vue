<template>
  <section>
    <div class="space-y-12">
      <div class="text-center space-y-4 max-w-md mx-auto">
        <SectionHeading section="Property Categories"
          >Start your journey to your ideal property</SectionHeading
        >
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 max-w-[75rem] mx-auto"
      >
        <template v-for="category in categories" :key="category.title">
          <a href="#" class="group">
            <CategoriesCard :category="category" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from "../headings/SectionHeading.vue";
import CategoriesCard from "./CategoriesCard.vue";
import ecofriendlyImg from "@/assets/images/ecofriendly.jpg";
import commercialImg from "@/assets/images/commercial.jpg";
import luxuryImg from "@/assets/images/luxury.jpg";

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
</script>

<style scoped></style>
