<template>
  <section>
    <div class="space-y-12">
      <div ref="headingRef">
        <div class="text-center space-y-4 max-w-md mx-auto">
          <SectionHeading section="Our Agents"
            >Our expert agents</SectionHeading
          >
        </div>
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
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../headings/SectionHeading.vue";
import AgentCard from "./AgentCard.vue";
import { Vue3Marquee } from "vue3-marquee";
import { fetchAllAgents, type Agent } from "@/utils/fetchAgents";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;

const agents = ref<Agent[]>([]);

onMounted(async () => {
  agents.value = await fetchAllAgents();

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
          id: "agents-heading",
        },
      }
    );
  }
});

onUnmounted(() => {
  // Kill animations
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === "agents-heading") {
      trigger.kill();
    }
  });
});
</script>

<style scoped>
div a:first-child {
  margin-left: 1.5rem;
}
</style>
