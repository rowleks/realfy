<template>
  <div class="testimonial-card">
    <div class="flex flex-col md:flex-row gap-8 md:items-center">
      <div class="space-y-4">
        <div class="space-y-3">
          <h3 class="text-xl md:text-2xl font-semibold">"{{ feedback }}"</h3>
          <p>
            {{ description }}
          </p>
        </div>

        <div>
          <p class="text-lg md:text-xl font-medium">{{ name }}</p>
          <small>{{ location }}</small>
        </div>
      </div>

      <div class="rounded-xl">
        <img
          :src="avatar"
          alt="testimonial"
          class="rounded-xl"
          width="750"
          height="750"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  feedback: string;
  description: string;
  location: string;
  avatar: string;
}>();
</script>

<style scoped>
@reference "tailwindcss";

.testimonial-card {
  @apply p-5 md:p-8 lg:p-15 rounded-3xl shadow-sm border-1 border-[#e8e8e8];
}
</style>
