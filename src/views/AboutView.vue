<template>
  <div>
    <GlobalLayout>
      <AboutHero />
      <Mission />
      <ValueSection />
    </GlobalLayout>
  </div>
</template>

<script setup lang="ts">
import AboutHero from "@/components/hero/AboutHero.vue";
import Mission from "@/components/mission/Mission.vue";
import ValueSection from "@/components/values/ValueSection.vue";
import GlobalLayout from "@/layouts/GlobalLayout.vue";
</script>

<style scoped></style>
