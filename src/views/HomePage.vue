<template>
  <GlobalLayout>
    <HomeHero />
    <MiniListing />
    <MiniAbout />
    <Categories />
    <ContactSection />
    <MetricsSection />
    <ProcessSection />
    <Agents />
    <Testimonials />
    <MiniBlogList />
    <FaqSection />
  </GlobalLayout>
</template>

<script setup lang="ts">
import ContactSection from "@/components/contact/ContactSection.vue";
import MiniAbout from "@/components/about/MiniAbout.vue";
import Categories from "@/components/categories/Categories.vue";
import HomeHero from "@/components/hero/HomeHero.vue";
import MiniListing from "@/components/listings/MiniListing.vue";
import MetricsSection from "@/components/metrics/MetricsSection.vue";
import ProcessSection from "@/components/process/ProcessSection.vue";
import Agents from "@/components/agents/Agents.vue";
import Testimonials from "@/components/testimonials/Testimonials.vue";
import MiniBlogList from "@/components/blog/MiniBlogList.vue";
import FaqSection from "@/components/faq/FaqSection.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";
</script>

<style scoped></style>
