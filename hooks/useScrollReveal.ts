"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(
  refs: (RefObject<HTMLElement | null> | HTMLElement | null)[]
) {
  useEffect(() => {
    const elements = refs
      .map((ref) => {
        if (ref && "current" in ref) {
          return ref.current;
        }
        return ref as HTMLElement | null;
      })
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => {
      // Set initial state
      gsap.set(el, {
        opacity: 0,
        y: 30,
      });

      // Create scroll trigger animation
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [refs]);
}
