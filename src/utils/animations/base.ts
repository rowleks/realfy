import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface AnimationConfig {
  trigger: HTMLElement | null;
  start?: string;
  end?: string;
  toggleActions?: string;
  id?: string;
}

export interface AnimationProps {
  opacity?: number;
  y?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export const createScrollTrigger = (config: AnimationConfig) => {
  return {
    trigger: config.trigger,
    start: config.start || "top 95%",
    end: config.end,
    toggleActions: config.toggleActions || "restart none none none",
    id: config.id,
  };
};

export const createAnimation = (
  element: HTMLElement | null,
  from: AnimationProps,
  to: AnimationProps,
  scrollTrigger?: ScrollTrigger.Vars
) => {
  if (!element) return null;

  return gsap.fromTo(element, from, {
    ...to,
    scrollTrigger,
  });
};

export const createStaggeredAnimation = (
  elements: HTMLElement[],
  from: AnimationProps,
  to: AnimationProps,
  scrollTrigger?: ScrollTrigger.Vars
) => {
  if (!elements.length) return null;

  return gsap.fromTo(elements, from, {
    ...to,
    scrollTrigger,
  });
};

export const killAnimation = (animation: gsap.core.Tween | null) => {
  if (animation) {
    animation.kill();
  }
};

export const killScrollTrigger = (id: string) => {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.id === id) {
      trigger.kill();
    }
  });
};
