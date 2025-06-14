import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initFaqSectionAnimations = (headingRef: HTMLElement | null) => {
  const headingAnimation = createAnimation(
    headingRef,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
    },
    createScrollTrigger({
      trigger: headingRef,
      id: "faq-section-heading",
    })
  );

  return {
    headingAnimation,
  };
};

export const initFaqsAnimations = (
  faqsRef: HTMLElement | null,
  faqRefs: HTMLElement[]
) => {
  const faqsAnimation = createStaggeredAnimation(
    faqRefs,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    createScrollTrigger({
      trigger: faqsRef,
      id: "faqs-items",
    })
  );

  return {
    faqsAnimation,
  };
};

export const cleanupFaqSectionAnimations = () => {
  killAnimation(null); // Kill heading animation
  killScrollTrigger("faq-section-heading");
};

export const cleanupFaqsAnimations = () => {
  killAnimation(null); // Kill faqs animation
  killScrollTrigger("faqs-items");
};
