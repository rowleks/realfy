import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initMiniListingAnimations = (
  headingRef: HTMLElement | null,
  listingsRef: HTMLElement | null,
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
      id: "listings-heading",
    })
  );

  const listingsAnimation = createStaggeredAnimation(
    cardRefs,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.5,
      delay: 1.5,
    },
    createScrollTrigger({
      trigger: listingsRef,
      id: "listings-cards",
    })
  );

  return {
    headingAnimation,
    listingsAnimation,
  };
};

export const cleanupMiniListingAnimations = () => {
  killAnimation(null); // Kill heading animation
  killAnimation(null); // Kill listings animation
  killScrollTrigger("listings-heading");
  killScrollTrigger("listings-cards");
};
