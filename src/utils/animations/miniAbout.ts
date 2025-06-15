import { gsap } from "gsap";
import {
  createScrollTrigger,
  killScrollTrigger,
  getStartPosition,
} from "./base";

export const initMiniAboutAnimations = (
  headingRef: HTMLElement | null,
  textRef: HTMLElement | null,
  buttonRef: HTMLElement | null,
  imageRef: HTMLElement | null
) => {
  const tl = gsap.timeline({
    scrollTrigger: createScrollTrigger({
      trigger: headingRef,
      start: getStartPosition,
      id: "about",
    }),
  });

  tl.fromTo(
    headingRef,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
    }
  )
    .fromTo(
      textRef,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.7"
    )
    .fromTo(
      buttonRef,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.7"
    )
    .fromTo(
      imageRef,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        duration: 1.2,
      }
    );

  return tl;
};

export const cleanupMiniAboutAnimations = (
  timeline: gsap.core.Timeline | null
) => {
  if (timeline) {
    timeline.kill();
  }
  killScrollTrigger("about");
};
