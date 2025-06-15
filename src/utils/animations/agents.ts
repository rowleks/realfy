import {
  createAnimation,
  createScrollTrigger,
  getStartPosition,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initAgentsAnimations = (headingRef: HTMLElement | null) => {
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
      id: "agents-heading",
    })
  );

  return {
    headingAnimation,
  };
};

export const cleanupAgentsAnimations = () => {
  killAnimation(null); // Kill heading animation
  killScrollTrigger("agents-heading");
};
