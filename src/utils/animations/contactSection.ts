import {
  createAnimation,
  createScrollTrigger,
  getStartPosition,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initContactSectionAnimations = (
  headingRef: HTMLElement | null,
  textRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  imageRef: HTMLElement | null,
  contentRef: HTMLElement | null
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
      id: "contact-heading",
    })
  );

  const textAnimation = createAnimation(
    textRef,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    },
    createScrollTrigger({
      trigger: contentRef,
      id: "contact-text",
    })
  );

  const buttonAnimation = createAnimation(
    buttonRef,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.8,
    },
    createScrollTrigger({
      trigger: contentRef,
      id: "contact-button",
    })
  );

  const imageAnimation = createAnimation(
    imageRef,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay: 0.5,
    },
    createScrollTrigger({
      trigger: imageRef,
      id: "contact-image",
    })
  );

  return {
    headingAnimation,
    textAnimation,
    buttonAnimation,
    imageAnimation,
  };
};

export const cleanupContactSectionAnimations = () => {
  killAnimation(null); // Kill heading animation
  killAnimation(null); // Kill text animation
  killAnimation(null); // Kill button animation
  killAnimation(null); // Kill image animation
  killScrollTrigger("contact-heading");
  killScrollTrigger("contact-text");
  killScrollTrigger("contact-button");
  killScrollTrigger("contact-image");
};
