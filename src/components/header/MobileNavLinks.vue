<template>
  <nav>
    <ul class="flex flex-col gap-7">
      <li v-for="link in links" :key="link.name">
        <RouterLink :to="link.path" class="text-xl">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <ButtonPrimary link="/explore" text="Explore All" class="mt-7" />
</template>

<script setup lang="ts">
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];
</script>

<style scoped></style>
