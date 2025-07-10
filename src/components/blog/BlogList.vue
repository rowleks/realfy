<template>
  <section>
    <div class="max-w-[75rem] mx-auto px-5">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref="blogsRef"
      >
        <template v-for="(blog, index) in blogs.reverse()" :key="blog.id">
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
import BlogCard from "./BlogCard.vue";
import { fetchBlogs, Blog } from "../../utils/data/fetchBlogs";
import {
  initMiniBlogListAnimations,
  cleanupMiniBlogListAnimations,
} from "@/utils/animations/miniBlogList";

const blogs = ref<Blog[]>([]);

const blogsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);

let animations: {
  blogsAnimation: gsap.core.Tween | null;
} | null = null;

watch(
  cardRefs,
  (newRefs) => {
    if (newRefs.length === blogs.value.slice(0, 6).length) {
      animations = initMiniBlogListAnimations(
        null,
        null,
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
