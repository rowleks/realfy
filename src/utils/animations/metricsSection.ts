import {
  createAnimation,
  createStaggeredAnimation,
  createScrollTrigger,
  killAnimation,
  killScrollTrigger,
  getStartPosition,
} from "./base";

export const initMetricsSectionAnimations = (
  headingRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  metricsRef: HTMLElement | null,
  cardRefs: HTMLElement[],
  listRefs?: HTMLElement[]
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
      start: getStartPosition,
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

  const listAnimation = createStaggeredAnimation(
    listRefs || [],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.8,
    },
    createScrollTrigger({
      trigger: headingRef,
      id: "metrics-list",
    })
  );

  return {
    headingAnimation,
    buttonAnimation,
    metricsAnimation,
    listAnimation,
  };
};

export const cleanupMetricsSectionAnimations = (
  animations: {
    headingAnimation?: gsap.core.Tween | null;
    buttonAnimation?: gsap.core.Tween | null;
    metricsAnimation?: gsap.core.Tween | null;
    listAnimation?: gsap.core.Tween | null;
  } = {}
) => {
  killAnimation(animations?.headingAnimation ?? null);
  killAnimation(animations?.buttonAnimation ?? null);
  killAnimation(animations?.metricsAnimation ?? null);
  killAnimation(animations?.listAnimation ?? null);
  killScrollTrigger("metrics-heading");
  killScrollTrigger("metrics-button");
  killScrollTrigger("metrics-cards");
  killScrollTrigger("metrics-list");
};
