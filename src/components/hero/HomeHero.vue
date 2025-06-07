<template>
  <div>
    <section class="py-10 md:py-20">
      <div class="space-y-4 text-center wrapper">
        <TitleButton>
          <div class="flex items-center gap-2">
            <HomeSvg class="size-4 md:size-5" />
            <h5>Buy & Sell Your Dream</h5>
          </div>
        </TitleButton>
        <h1 class="title-heading">REAL-ESTATE</h1>
        <img
          src="../../assets/images/hero-image.png"
          alt="Hero Image"
          class="object-cover"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TitleButton from "../buttons/TitleButton.vue";
import HomeSvg from "../svg/HomeSvg.vue";
</script>

<style scoped></style>
