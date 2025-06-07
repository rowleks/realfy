<template>
  <a :href="link" class="btn">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["link", "text"]);
</script>

<style scoped></style>
