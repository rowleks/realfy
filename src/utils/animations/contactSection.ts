import {
  createAnimation,
  createScrollTrigger,
  createStaggeredAnimation,
  getStartPosition,
  killAnimation,
  killScrollTrigger,
} from "./base";

export const initContactSectionAnimations = (
  headingRef: HTMLElement | null,
  textRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  imageRef: HTMLElement | null,
  contentRef: HTMLElement | null,
  listRef?: HTMLElement[] | null
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

  const listAnimation = createStaggeredAnimation(
    listRef || [],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 1.2,
    },
    createScrollTrigger({
      trigger: contentRef,
      id: "contact-list",
    })
  );

  return {
    headingAnimation,
    textAnimation,
    buttonAnimation,
    imageAnimation,
    listAnimation,
  };
};

export const cleanupContactSectionAnimations = (
  animations: {
    headingAnimation?: gsap.core.Tween | null;
    textAnimation?: gsap.core.Tween | null;
    buttonAnimation?: gsap.core.Tween | null;
    imageAnimation?: gsap.core.Tween | null;
    listAnimation?: gsap.core.Tween | null;
  } = {}
) => {
  killAnimation(animations?.headingAnimation ?? null);
  killAnimation(animations?.textAnimation ?? null);
  killAnimation(animations?.buttonAnimation ?? null);
  killAnimation(animations?.imageAnimation ?? null);
  killAnimation(animations?.listAnimation ?? null);
  killScrollTrigger("contact-heading");
  killScrollTrigger("contact-text");
  killScrollTrigger("contact-button");
  killScrollTrigger("contact-image");
  killScrollTrigger("contact-list");
};
