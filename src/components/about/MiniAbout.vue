<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col md:flex-row gap-12">
      <div class="space-y-10 md:max-w-1/2">
        <div class="space-y-4 max-w-lg">
          <SectionHeading section="About Us"
            >The ideal way to find your home</SectionHeading
          >
        </div>
        <div class="space-y-6">
          <p>
            Wake up to the sound of waves and the smell of salt air in one of
            our stunning coastal homes. Perfect for those seeking a serene
            escape, these properties offer unmatched ocean views and direct
            beach safe neighborhoods, and nearby schools access.
          </p>
          <ButtonPrimary link="#">Read More</ButtonPrimary>
        </div>
      </div>
      <div class="rounded-3xl">
        <img
          src="../../assets/images/about-image.jpg"
          alt="about image"
          class="rounded-3xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";
</script>

<style scoped></style>
