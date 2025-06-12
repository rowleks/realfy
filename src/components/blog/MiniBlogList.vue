<template>
  <section>
    <div class="space-y-12 max-w-[75rem] mx-auto px-5">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-end gap-4"
      >
        <div class="space-y-4">
          <SectionHeading section="Articles"
            >Read our latest blogs</SectionHeading
          >
        </div>
        <ButtonPrimary link="#" class="w-fit">Explore All</ButtonPrimary>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="blog in blogs.slice(0, 6).reverse()" :key="blog.id">
          <a href="#" class="group">
            <BlogCard :blog="blog" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import BlogCard from "./BlogCard.vue";
import { fetchBlogs, Blog } from "../../utils/fetchBlogs";

const blogs = ref<Blog[]>([]);

onMounted(async () => {
  blogs.value = await fetchBlogs();
});
</script>

<style scoped></style>
