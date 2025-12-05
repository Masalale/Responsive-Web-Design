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
    <div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sage text-sm flex flex-col items-center gap-2 cursor-pointer" 
      onClick={handleClick}
    >
      <span>Scroll down</span>
      <div className="w-5 h-5 border-r-2 border-b-2 border-sage rotate-45 animate-bounce-arrow"></div>
    </div>
  );
}
