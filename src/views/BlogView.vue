<template>
  <div>
    <GlobalLayout>
      <BlogHero />
      <BlogList />
    </GlobalLayout>
  </div>
</template>

<script setup lang="ts">
import BlogList from "@/components/blog/BlogList.vue";
import BlogHero from "@/components/hero/BlogHero.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";
</script>

<style scoped></style>
