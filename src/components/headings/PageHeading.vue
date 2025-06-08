<template>
  <TitleButton>
    <div class="flex items-center gap-2">
      <HomeSvg class="size-4 md:size-5" />
      <h5>{{ subTitle }}</h5>
    </div>
  </TitleButton>
  <h1 class="title-heading"><slot /></h1>
</template>

<script setup lang="ts">
import TitleButton from "../buttons/TitleButton.vue";
defineProps(["subTitle"]);
</script>

<style scoped></style>
