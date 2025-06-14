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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ListingCard from "./ListingCard.vue";
import { fetchAllListings, Property } from "../../utils/fetchListings";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import SectionHeading from "../headings/SectionHeading.vue";

gsap.registerPlugin(ScrollTrigger);

const listings = ref<Property[]>([]);
const headingRef = ref<HTMLElement | null>(null);
const listingsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
let headingAnimation: gsap.core.Tween | null = null;
let listingsAnimation: gsap.core.Tween | null = null;

// Initialize animations after data is loaded and refs are populated
const initAnimations = () => {
  // Heading animation
  if (headingRef.value) {
    headingAnimation = gsap.fromTo(
      headingRef.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "listings-heading",
        },
      }
    );
  }

  // Listings animation
  if (listingsRef.value && cardRefs.value.length > 0) {
    listingsAnimation = gsap.fromTo(
      cardRefs.value,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.5,
        delay: 1.5,
        scrollTrigger: {
          trigger: listingsRef.value,
          start: () => {
            const width = window.innerWidth;
            if (width < 768) {
              // Mobile
              return "top 40%";
            } else {
              // Desktop
              return "top 95%";
            }
          },
          toggleActions: "restart none none none",
          id: "listings-cards",
        },
      }
    );
  }
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
  // Kill animations
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }
  if (listingsAnimation) {
    listingsAnimation.kill();
    listingsAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "listings-heading" ||
      trigger.vars.id === "listings-cards"
    ) {
      trigger.kill();
    }
  });
});

const miniList = computed(() => {
  return listings.value.slice(-6).reverse();
});
</script>

<style scoped></style>
