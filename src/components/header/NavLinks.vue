<template>
  <nav class="flex items-center">
    <ul class="flex items-center gap-14">
      <li v-for="link in links" :key="link.name" class="hover:font-medium">
        <a :href="link.path">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];
</script>

<style scoped></style>
