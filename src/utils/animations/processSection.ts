import {
  createAnimation,
  createScrollTrigger,
  getStartPosition,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initProcessSectionAnimations = (
  headingRef: HTMLElement | null
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
      id: "process-heading",
    })
  );

  return {
    headingAnimation,
  };
};

export const cleanupProcessSectionAnimations = () => {
  killAnimation(null); // Kill heading animation
  killScrollTrigger("process-heading");
};
