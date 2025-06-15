<template>
  <section>
    <div class="space-y-12 max-w-[75rem] mx-auto px-5">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-end gap-4"
        ref="headingRef"
      >
        <div>
          <div class="space-y-4">
            <SectionHeading section="Articles"
              >Read our latest blogs</SectionHeading
            >
          </div>
        </div>
        <div ref="buttonRef">
          <ButtonPrimary link="#" class="w-fit">Explore All</ButtonPrimary>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref="blogsRef"
      >
        <template
          v-for="(blog, index) in blogs.slice(0, 6).reverse()"
          :key="blog.id"
        >
          <a
            href="#"
            class="group"
            :ref="
              (el) => {
                if (el) cardRefs[index] = el;
              }
            "
          >
            <BlogCard :blog="blog" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import BlogCard from "./BlogCard.vue";
import { fetchBlogs, Blog } from "../../utils/data/fetchBlogs";
import {
  initMiniBlogListAnimations,
  cleanupMiniBlogListAnimations,
} from "@/utils/animations/miniBlogList";

const blogs = ref<Blog[]>([]);
const headingRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const blogsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);

let animations: {
  headingAnimation: gsap.core.Tween | null;
  buttonAnimation: gsap.core.Tween | null;
  blogsAnimation: gsap.core.Tween | null;
} | null = null;

// Watch for changes in cardRefs to ensure all refs are populated
watch(
  cardRefs,
  (newRefs) => {
    if (newRefs.length === blogs.value.slice(0, 6).length) {
      animations = initMiniBlogListAnimations(
        headingRef.value,
        buttonRef.value,
        blogsRef.value,
        cardRefs.value
      );
    }
  },
  { deep: true }
);

onMounted(async () => {
  blogs.value = await fetchBlogs();
});

onUnmounted(() => {
  cleanupMiniBlogListAnimations();
  animations = null;
});
</script>

<style scoped></style>
