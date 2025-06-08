<template>
  <div class="space-y-2">
    <div class="relative rounded-3xl">
      <div class="overflow-hidden rounded-3xl">
        <img
          :src="category.image"
          :alt="category.title"
          class="rounded-3xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
    <div class="space-y-4">
      <div>
        <h4 class="text-xl">{{ category.title }}</h4>
        <small>{{ category.description }}</small>
      </div>
      <button
        class="flex items-center justify-center gap-1 py-[7px] px-4 rounded-md border-1 border-[#efefef] cursor-pointer"
      >
        Explore Now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Cateogories {
  image: string;
  title: string;
  description: string;
}
defineProps<{
  category: Cateogories;
}>();
</script>

<style scoped></style>
