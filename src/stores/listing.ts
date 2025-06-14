import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchAllListings, Property } from "../utils/data/fetchListings";

export const useListingStore = defineStore("listing", () => {
  const listings = ref<Property[]>([]);

  const fetchListings = async () => {
    listings.value = await fetchAllListings();
  };

  return {
    listings,
    fetchListings,
  };
});
