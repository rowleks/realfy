import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initCategoriesAnimations = (
  headingRef: HTMLElement | null,
  categoriesRef: HTMLElement | null,
  cardRefs: HTMLElement[]
) => {
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
      id: "categories-heading",
    })
  );

  const categoriesAnimation = createStaggeredAnimation(
    cardRefs,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 0.5,
    },
    createScrollTrigger({
      trigger: categoriesRef,
      id: "categories-cards",
    })
  );

  return {
    headingAnimation,
    categoriesAnimation,
  };
};

export const cleanupCategoriesAnimations = () => {
  killAnimation(null); // Kill heading animation
  killAnimation(null); // Kill categories animation
  killScrollTrigger("categories-heading");
  killScrollTrigger("categories-cards");
};
