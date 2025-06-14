<template>
  <section>
    <div class="space-y-12">
      <div ref="headingRef">
        <div class="text-center space-y-4">
          <SectionHeading section="Recent Properties"
            >Featured properties
          </SectionHeading>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 max-w-[75rem] mx-auto"
        ref="listingsRef"
      >
        <template v-for="(listing, index) in miniList" :key="listing.id">
          <a
            href="#"
            class="group"
            :ref="
              (el) => {
                if (el) cardRefs[index] = el;
              }
            "
          >
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
import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import ListingCard from "./ListingCard.vue";
import { fetchAllListings, Property } from "../../utils/data/fetchListings";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";
import {
  initMiniListingAnimations,
  cleanupMiniListingAnimations,
} from "../../utils/animations/miniListing";

const listings = ref<Property[]>([]);
const headingRef = ref<HTMLElement | null>(null);
const listingsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
let animations: ReturnType<typeof initMiniListingAnimations> | null = null;

// Initialize animations after data is loaded and refs are populated
const initAnimations = () => {
  animations = initMiniListingAnimations(
    headingRef.value,
    listingsRef.value,
    cardRefs.value
  );
};

// Watch for changes in cardRefs to ensure all refs are populated
watch(
  cardRefs,
  (newRefs) => {
    if (newRefs.length === miniList.value.length) {
      initAnimations();
    }
  },
  { deep: true }
);

onMounted(async () => {
  listings.value = await fetchAllListings();
});

onUnmounted(() => {
  cleanupMiniListingAnimations();
});

const miniList = computed(() => {
  return listings.value.slice(-6).reverse();
});
</script>

<style scoped></style>
