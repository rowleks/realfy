<template>
  <section>
    <div class="space-y-12 max-w-[75rem] mx-auto px-5">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-end gap-4"
        ref="headingRef"
      >
        <div>
          <div class="space-y-4">
            <SectionHeading section="Articles"
              >Read our latest blogs</SectionHeading
            >
          </div>
        </div>
        <div ref="buttonRef">
          <ButtonPrimary link="#" class="w-fit">Explore All</ButtonPrimary>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref="blogsRef"
      >
        <template
          v-for="(blog, index) in blogs.slice(0, 6).reverse()"
          :key="blog.id"
        >
          <a
            href="#"
            class="group"
            :ref="
              (el) => {
                if (el) cardRefs[index] = el;
              }
            "
          >
            <BlogCard :blog="blog" />
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../headings/SectionHeading.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import BlogCard from "./BlogCard.vue";
import { fetchBlogs, Blog } from "../../utils/fetchBlogs";

gsap.registerPlugin(ScrollTrigger);

const blogs = ref<Blog[]>([]);
const headingRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLElement | null>(null);
const blogsRef = ref<HTMLElement | null>(null);
const cardRefs = ref<any[]>([]);
let headingAnimation: gsap.core.Tween | null = null;
let buttonAnimation: gsap.core.Tween | null = null;
let blogsAnimation: gsap.core.Tween | null = null;

// Initialize animations after data is loaded and refs are populated
const initAnimations = () => {
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
          id: "blogs-heading",
        },
      }
    );
  }

  // Button animation
  if (buttonRef.value) {
    buttonAnimation = gsap.fromTo(
      buttonRef.value,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: headingRef.value,
          start: "top 95%",
          toggleActions: "restart none none none",
          id: "blogs-button",
        },
      }
    );
  }

  // Blogs animation
  if (blogsRef.value && cardRefs.value.length > 0) {
    blogsAnimation = gsap.fromTo(
      cardRefs.value,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        delay: 0.8,
        scrollTrigger: {
          trigger: blogsRef.value,
          start: () => {
            const width = window.innerWidth;
            if (width < 768) {
              return "top 40%";
            } else {
              return "top 95%";
            }
          },
          toggleActions: "restart none none none",
          id: "blogs-cards",
        },
      }
    );
  }
};

// Watch for changes in cardRefs to ensure all refs are populated
watch(
  cardRefs,
  (newRefs) => {
    if (newRefs.length === blogs.value.slice(0, 6).length) {
      initAnimations();
    }
  },
  { deep: true }
);

onMounted(async () => {
  blogs.value = await fetchBlogs();
});

onUnmounted(() => {
  // Kill animations
  if (headingAnimation) {
    headingAnimation.kill();
    headingAnimation = null;
  }
  if (buttonAnimation) {
    buttonAnimation.kill();
    buttonAnimation = null;
  }
  if (blogsAnimation) {
    blogsAnimation.kill();
    blogsAnimation = null;
  }

  // Kill ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => {
    if (
      trigger.vars.id === "blogs-heading" ||
      trigger.vars.id === "blogs-button" ||
      trigger.vars.id === "blogs-cards"
    ) {
      trigger.kill();
    }
  });
});
</script>

<style scoped></style>
