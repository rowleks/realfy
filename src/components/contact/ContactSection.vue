<template>
  <section class="max-w-[75rem] mx-auto px-5">
    <div class="flex flex-col md:flex-row-reverse gap-20">
      <div class="space-y-10 md:max-w-1/2">
        <div class="space-y-4 max-w-lg">
          <SectionHeading section="Why choose us"
            >Why we are the best in Real Estate market</SectionHeading
          >
        </div>
        <div class="space-y-6">
          <p>
            With our unmatched expertise, personalized service, and deep
            knowledge of the real estate market, we make your home buying or
            selling experience seamless and stress-free. Our dedicated team of
            professionals listens to your needs, provides tailored.
          </p>
          <ButtonPrimary link="#">Contact Us</ButtonPrimary>
        </div>
      </div>
      <div class="rounded-3xl">
        <img
          src="../../assets/images/contact-image.jpg"
          alt="contact image"
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
