"use client";

import { useLenis } from "@/components/providers/LenisProvider";

export function ScrollHint() {
  const { lenis } = useLenis();

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo("#about", { duration: 1.2 });
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-hint" onClick={handleClick} style={{ cursor: "pointer" }}>
      <span>Scroll down</span>
      <div className="arrow"></div>
    </div>
  );
}
