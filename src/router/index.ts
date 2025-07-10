import AboutView from "@/views/AboutView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/blog", name: "Blog", component: BlogView },
  { path: "/contact", name: "Contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
