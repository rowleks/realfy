<template>
  <section>
    <div class="space-y-12">
      <div class="text-center space-y-4 max-w-md mx-auto">
        <SectionHeading section="Our Agents">Our expert agents</SectionHeading>
      </div>
      <div>
        <Vue3Marquee :pause-on-hover="true" :duration="40">
          <div class="flex gap-6 justify-between w-full">
            <a v-for="agent in agents" :key="agent.id" href="#" class="group">
              <AgentCard :agent="agent" />
            </a>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SectionHeading from "../headings/SectionHeading.vue";
import AgentCard from "./AgentCard.vue";
import { Vue3Marquee } from "vue3-marquee";
import { fetchAllAgents, type Agent } from "@/utils/fetchAgents";

const agents = ref<Agent[]>([]);

onMounted(async () => {
  agents.value = await fetchAllAgents();
});
</script>

<style scoped>
div a:first-child {
  margin-left: 1.5rem;
}
</style>
