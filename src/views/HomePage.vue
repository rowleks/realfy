<template>
  <NavBar />
  <HomeHero />
  <MiniListing />
  <MiniAbout />
  <Categories />
  <ContactSection />
  <MetricsSection />
</template>

<script setup lang="ts">
import ContactSection from "@/components/contact/ContactSection.vue";
import MiniAbout from "@/components/about/MiniAbout.vue";
import Categories from "@/components/categories/Categories.vue";
import NavBar from "@/components/header/Navbar.vue";
import HomeHero from "@/components/hero/HomeHero.vue";
import MiniListing from "@/components/listings/MiniListing.vue";
import MetricsSection from "@/components/metrics/MetricsSection.vue";
</script>

<style scoped></style>
