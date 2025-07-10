<template>
  <div>
    <GlobalLayout>
      <ContactHero />
      <FaqSection />
    </GlobalLayout>
  </div>
</template>

<script setup lang="ts">
import FaqSection from "@/components/faq/FaqSection.vue";
import ContactHero from "@/components/hero/ContactHero.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";
</script>

<style scoped></style>
