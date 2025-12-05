"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/providers/LenisProvider";

export function useScrollTo() {
  const { lenis } = useLenis();

  const scrollTo = useCallback(
    (target: string | HTMLElement, options?: { duration?: number; offset?: number }) => {
      const duration = options?.duration ?? 1.2;
      const offset = options?.offset ?? 0;

      if (lenis) {
        lenis.scrollTo(target, { duration, offset });
      } else {
        // Fallback for when Lenis is not available
        const element =
          typeof target === "string" ? document.querySelector(target) : target;
        element?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return scrollTo;
}
