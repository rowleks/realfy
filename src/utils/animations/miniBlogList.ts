import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
  getStartPosition,
} from "./base";

export const initMiniBlogListAnimations = (
  headingRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  blogsRef: HTMLElement | null,
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
      id: "blogs-heading",
    })
  );

  const buttonAnimation = createAnimation(
    buttonRef,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
    },
    createScrollTrigger({
      trigger: headingRef,
      start: getStartPosition,
      id: "blogs-button",
    })
  );

  const blogsAnimation = createStaggeredAnimation(
    cardRefs,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 0.8,
    },
    createScrollTrigger({
      trigger: blogsRef,
      id: "blogs-cards",
    })
  );

  return {
    headingAnimation,
    buttonAnimation,
    blogsAnimation,
  };
};

export const cleanupMiniBlogListAnimations = () => {
  killAnimation(null); // Kill heading animation
  killAnimation(null); // Kill button animation
  killAnimation(null); // Kill blogs animation
  killScrollTrigger("blogs-heading");
  killScrollTrigger("blogs-button");
  killScrollTrigger("blogs-cards");
};
