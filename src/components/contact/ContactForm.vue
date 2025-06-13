<template>
  <div>
    <div class="space-y-10">
      <div class="space-y-4 max-w-lg">
        <SectionHeading
          section="Contact"
          class="bg-[#f7f7f71a] border-2 border-[#ffffff1f]"
          >Want to reach out to us?</SectionHeading
        >
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name"></label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Name"
          />
        </div>
        <div>
          <label for="email"></label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Email"
          />
        </div>
        <div>
          <button type="submit">Book a Call</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeading from "../headings/SectionHeading.vue";
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
});

const handleSubmit = () => {
  // Handle form submission here
  console.log("Form submitted:", formData);
};
</script>

<style scoped>
@reference "tailwindcss";
input {
  @apply block w-full bg-transparent border border-black border-b border-b-white/40 p-2 focus:outline-none md:text-lg focus-within:bg-transparent focus:bg-transparent;
}

button {
  @apply inline-flex justify-center rounded-md border border-transparent bg-white py-2 px-4 md:py-3 md:px-5 font-medium text-black cursor-pointer hover:opacity-90;
}
</style>
