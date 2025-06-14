import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initMetricsSectionAnimations = (
  headingRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  metricsRef: HTMLElement | null,
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
      id: "metrics-heading",
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
      trigger: buttonRef,
      id: "metrics-button",
    })
  );

  const metricsAnimation = createStaggeredAnimation(
    cardRefs,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.8,
    },
    createScrollTrigger({
      trigger: metricsRef,
      id: "metrics-cards",
    })
  );

  return {
    headingAnimation,
    buttonAnimation,
    metricsAnimation,
  };
};

export const cleanupMetricsSectionAnimations = () => {
  killAnimation(null); // Kill heading animation
  killAnimation(null); // Kill button animation
  killAnimation(null); // Kill metrics animation
  killScrollTrigger("metrics-heading");
  killScrollTrigger("metrics-button");
  killScrollTrigger("metrics-cards");
};
