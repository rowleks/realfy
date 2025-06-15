<template>
  <header class="bg-white p-5 relative">
    <div class="flex items-center justify-between wrapper">
      <img
        src="../../assets/images/realfy-logo-black.svg"
        alt="Realfy Logo"
        class="relative z-20 cursor-pointer"
      />
      <NavLinks class="hidden md:block" />
      <ButtonPrimary link="/explore" class="hidden md:block"
        >Explore All</ButtonPrimary
      >

      <div class="md:hidden relative z-20">
        <img
          src="../../assets/icons/hamburger.svg"
          alt="Menu"
          class="size-10 cursor-pointer"
          v-if="!isMobileMenuOpen"
          @click="isMobileMenuOpen = true"
        />
        <img
          src="../../assets/icons/cancel.svg"
          alt="Cancel Menu"
          class="size-10 cursor-pointer"
          v-if="isMobileMenuOpen"
          @click="isMobileMenuOpen = false"
        />
      </div>
    </div>

    <!-- Mobile Nav with transition -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 bg-white p-5 border-t-1 border-[#0c0407] w-full z-10"
      >
        <MobileNavLinks />
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import NavLinks from "./NavLinks.vue";
import ButtonPrimary from "@/components/buttons/ButtonPrimary.vue";
import MobileNavLinks from "./MobileNavLinks.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobileMenuOpen = ref(false);

function handleClickOutside(event: MouseEvent) {
  const header = document.querySelector("header");
  if (
    isMobileMenuOpen.value &&
    header &&
    !header.contains(event.target as Node)
  ) {
    isMobileMenuOpen.value = false;
  }
}

function handleResize() {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped></style>
