<template>
  <section class="bg-black text-white pb-10">
    <div class="max-w-[75rem] mx-auto px-5 space-y-10">
      <div class="flex flex-col md:flex-row gap-8 lg:gap-10">
        <div class="flex-1">
          <ContactForm />
        </div>
        <div class="flex-[1.2]">
          <img src="../../assets/images/footer-image.png" alt="footer image" />
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div class="space-y-1">
          <img
            src="../../assets/images/realfy-logo-white.svg"
            alt="realfy logo"
          />
          <p>Making your dream home a reality.</p>
        </div>

        <div class="flex items-center gap-4 max-sm:mx-auto">
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/fb-icon.svg"
              alt="facebook icon"
              width="24"
              height="24"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/linkedin-icon.svg"
              alt="linkedin icon"
              width="24"
              height="24"
            />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener">
            <img
              src="../../assets/icons/x-logo.jpg"
              alt="x icon"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
      <div class="text-center">
        <small>&copy;2025 All rights reserved.</small>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from "../contact/ContactForm.vue";
</script>

<style scoped></style>
