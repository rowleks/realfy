<template>
  <div class="space-y-2">
    <div class="relative rounded-3xl">
      <div class="overflow-hidden rounded-3xl">
        <img
          :src="listing.image"
          :alt="listing.title"
          class="rounded-3xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div
        class="flex items-center justify-between absolute top-0 left-0 w-full p-4"
      >
        <span class="rounded-2xl bg-white py-1 px-3">{{ listing.type }}</span>
        <span
          class="rounded-2xl bg-white py-1 px-3 font-medium"
          v-if="listing.type.toLocaleLowerCase() === 'rent'"
        >
          $ {{ listing.price.toLocaleString("en-US") }} / month
        </span>
        <span class="rounded-2xl bg-white py-1 px-3 font-medium" v-else>
          $ {{ listing.price.toLocaleString("en-US") }}
        </span>
      </div>
    </div>
    <div class="space-y-4">
      <div>
        <h4 class="text-xl md:text-2xl">{{ listing.title }}</h4>
        <div class="flex items-center gap-1">
          <LocationSvg class="inline-block size-[18px]" />
          <small>{{ listing.address }}</small>
        </div>
      </div>
      <div class="flex items-center gap-1 text-sm">
        <div
          class="flex items-center gap-1 py-[7px] px-4 rounded-md border-1 border-[#efefef]"
        >
          <CrossSvg class="inline-block size-[18px]" />
          <span>{{ listing.area_sqft }} sqft</span>
        </div>
        <div
          class="flex items-center gap-1 py-[7px] px-3 rounded-md border-1 border-[#efefef]"
        >
          <BedSvg class="inline-block size-[18px]" />
          <span>{{ listing.bedrooms }}</span>
        </div>
        <div
          class="flex items-center gap-1 py-[7px] px-3 rounded-md border-1 border-[#efefef]"
        >
          <ShowerSvg class="inline-block size-[18px]" />
          <span>{{ listing.bathrooms }}</span>
        </div>
        <div
          class="flex items-center gap-1 py-[7px] px-3 rounded-md border-1 border-[#efefef]"
        >
          <CarSvg class="inline-block size-[18px]" />
          <span>{{ listing.garages }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BedSvg from "../svg/BedSvg.vue";
import CarSvg from "../svg/CarSvg.vue";
import CrossSvg from "../svg/CrossSvg.vue";
import LocationSvg from "../svg/LocationSvg.vue";
import ShowerSvg from "../svg/ShowerSvg.vue";
import type { Property } from "../../utils/data/fetchListings";

const props = defineProps<{
  listing: Property;
}>();
const listing = props.listing;
</script>

<style scoped></style>
