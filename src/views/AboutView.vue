<template>
  <div>
    <GlobalLayout>
      <AboutHero />
      <Mission />
      <ValueSection />
      <ContactSection />
      <MetricsSection />
      <Testimonials />
      <MiniBlogList />
      <FaqSection />
    </GlobalLayout>
  </div>
</template>

<script setup lang="ts">
import MiniBlogList from "@/components/blog/MiniBlogList.vue";
import ContactSection from "@/components/contact/ContactSection.vue";
import FaqSection from "@/components/faq/FaqSection.vue";
import AboutHero from "@/components/hero/AboutHero.vue";
import MetricsSection from "@/components/metrics/MetricsSection.vue";
import Mission from "@/components/mission/Mission.vue";
import Testimonials from "@/components/testimonials/Testimonials.vue";
import ValueSection from "@/components/values/ValueSection.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";
</script>

<style scoped></style>
