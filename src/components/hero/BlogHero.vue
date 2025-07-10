<template>
  <div>
    <section>
      <div class="space-y-4 text-center wrapper px-4">
        <div ref="headingRef">
          <PageHeading subTitle="All Articles">BLOGS</PageHeading>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHeading from "../headings/PageHeading.vue";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;

onMounted(() => {
  headingAnimation = gsap.fromTo(
    headingRef.value,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: headingRef.value,
        start: "top 80%",
        toggleActions: "play none restart none",
        id: "hero-heading",
      },
    }
  );
});

onUnmounted(() => {
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }

  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "hero-heading" ||
      trigger.vars.id === "hero-image"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
