<template>
  <div class="space-y-4">
    <div class="relative rounded-3xl">
      <div class="overflow-hidden rounded-3xl">
        <img
          :src="blog.image"
          :alt="blog.title"
          class="rounded-3xl transition-transform duration-500 group-hover:scale-105 aspect-square object-cover"
        />
      </div>
    </div>
    <div class="space-y-4">
      <div class="space-y-2">
        <h4
          class="text-xl md:text-2xl font-medium md:min-h-20 overflow-ellipsis"
        >
          {{ blog.title }}
        </h4>
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-1.5">
            <DateSvg />
            <small>{{ formatDate(blog.date) }}</small>
          </span>
          <span class="flex items-center gap-1.5 text-gray-600">
            <ClockSvg />
            <small>{{ blog.readingTime }} min read</small>
          </span>
        </div>
      </div>
      <button class="btn-tertiary">Read More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClockSvg from "../svg/ClockSvg.vue";
import DateSvg from "../svg/DateSvg.vue";

defineProps<{
  blog: {
    id: number;
    title: string;
    image: string;
    date: string;
    readingTime: number;
  };
}>();

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped></style>
