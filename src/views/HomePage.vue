<template>
  <NavBar />
  <HomeHero />
  <MiniListing />
  <MiniAbout />
  <Categories />
</template>

<script setup lang="ts">
import MiniAbout from "@/components/about/MiniAbout.vue";
import Categories from "@/components/categories/Categories.vue";
import NavBar from "@/components/header/Navbar.vue";
import HomeHero from "@/components/hero/HomeHero.vue";
import MiniListing from "@/components/listings/MiniListing.vue";
</script>

<style scoped></style>
