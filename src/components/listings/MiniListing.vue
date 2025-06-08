<template>
  <section>
    <div class="space-y-8">
      <div class="text-center space-y-4">
        <TitleButton>Recent Properties</TitleButton>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Featured properties
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 max-w-[75rem] mx-auto"
      >
        <template v-for="listing in miniList" :key="listing.id">
          <a href="#" class="group">
            <ListingCard :listing="listing" />
          </a>
        </template>
      </div>
      <div class="text-center">
        <ButtonPrimary link="/listings" text="Explore all" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import TitleButton from "../buttons/TitleButton.vue";
import ListingCard from "./ListingCard.vue";
import { fetchAllListings, Property } from "./utils/fetchListings";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";

const listings = ref<Property[]>([]);

onMounted(async () => {
  listings.value = await fetchAllListings();
});
const miniList = computed(() => {
  return listings.value.slice(-6).reverse();
});
</script>

<style scoped></style>
