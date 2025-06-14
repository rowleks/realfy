<template>
  <section>
    <div class="space-y-12">
      <div ref="headingRef">
        <div class="text-center space-y-4 max-w-md mx-auto">
          <SectionHeading section="Testimonials">
            Real stories from happy homeowners
          </SectionHeading>
        </div>
      </div>
      <swiper-container
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 10000, disableOnInteraction: false }"
        :speed="600"
        effect="slide"
        class="py-8 px-5 max-w-[70rem] mx-auto bg-white"
        :navigation="{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }"
      >
        <swiper-slide v-for="(testimonial, k) in testimonies" :key="k">
          <TestimonialCard v-bind="testimonial" />
        </swiper-slide>
        <div
          slot="container-end"
          class="flex items-center justify-center gap-4 bg-white py-6"
        >
          <div class="custom-swiper-prev cursor-pointer">
            <PrevButton />
          </div>
          <div class="custom-swiper-next cursor-pointer">
            <NextButton />
          </div>
        </div>
      </swiper-container>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { register } from "swiper/element/bundle";
import SectionHeading from "../headings/SectionHeading.vue";
import TestimonialCard from "./TestimonialCard.vue";
import PrevButton from "../buttons/PrevButton.vue";
import NextButton from "../buttons/NextButton.vue";
import avatar1 from "../../assets/images/test1.jpeg";
import avatar2 from "../../assets/images/test2.png";
import avatar3 from "../../assets/images/test3.jpg";

gsap.registerPlugin(ScrollTrigger);

const headingRef = ref<HTMLElement | null>(null);
let headingAnimation: gsap.core.Tween | null = null;

// Register Swiper custom elements
register();

const testimonies = [
  {
    name: "Alice Johnson",
    feedback:
      "Realfy made buying our first home a breeze. The team was supportive and transparent every step of the way.",
    description:
      "As a first-time homebuyer, I felt overwhelmed by the process. Realfy's team guided me and my family through each stage, answered all our questions, and made sure everything went smoothly and stress-free from start to finish.",
    location: "San Francisco, CA",
    avatar: avatar1,
  },
  {
    name: "Brian Lee",
    feedback:
      "I sold my house faster than I expected. The process was smooth and I felt confident throughout.",
    description:
      "I needed to sell my home quickly because of a job relocation. Realfy gave me expert advice on pricing and marketing, which led to multiple offers and a fast, hassle-free sale.",
    location: "Austin, TX",
    avatar: avatar2,
  },
  {
    name: "Priya Patel",
    feedback:
      "Exceptional service and attention to detail. I highly recommend Realfy to anyone looking for a new home.",
    description:
      "I was searching for my dream home and had very specific requirements. Realfy listened carefully, gave me personalized recommendations, and made sure every detail was handled with care. They made my home-buying journey enjoyable and successful.",
    location: "Seattle, WA",
    avatar: avatar3,
  },
];

onMounted(() => {
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
          id: "testimonials-heading",
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
    if (trigger.vars.id === "testimonials-heading") {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
