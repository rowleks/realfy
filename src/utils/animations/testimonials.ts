import {
  createAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initTestimonialsAnimations = (headingRef: HTMLElement | null) => {
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
      id: "testimonials-heading",
    })
  );

  return {
    headingAnimation,
  };
};

export const cleanupTestimonialsAnimations = () => {
  killAnimation(null); // Kill heading animation
  killScrollTrigger("testimonials-heading");
};
