<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/components/footer/Footer.vue";
import Navbar from "@/components/header/Navbar.vue";
</script>

<style scoped></style>
