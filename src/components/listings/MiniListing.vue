<template>
  <section>
    <div class="space-y-12">
      <div class="text-center space-y-4">
        <SectionHeading section="Recent Properties"
          >Featured properties
        </SectionHeading>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 max-w-[75rem] mx-auto"
      >
        <template v-for="listing in miniList" :key="listing.id">
          <a href="#" class="group">
            <ListingCard :listing="listing" />
          </a>
        </template>
      </div>
      <div class="text-center">
        <ButtonPrimary link="/listings">Explore All</ButtonPrimary>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import ListingCard from "./ListingCard.vue";
import { fetchAllListings, Property } from "../../utils/fetchListings";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";

const listings = ref<Property[]>([]);

onMounted(async () => {
  listings.value = await fetchAllListings();
});
const miniList = computed(() => {
  return listings.value.slice(-6).reverse();
});
</script>

<style scoped></style>
