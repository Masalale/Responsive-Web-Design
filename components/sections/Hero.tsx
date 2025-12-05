"use client";

import { useLenis } from "@/components/providers/LenisProvider";
import { ScrollHint } from "@/components/ui/ScrollHint";

export function Hero() {
  const { lenis } = useLenis();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#contact", { duration: 1.5 });
    } else {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <h1 className="main-title">Clarence Ngángá Chomba</h1>
        <h2 className="tagline">Software Engineer</h2>
        <p className="description">
          Building scalable solutions through Python, web development, and system
          administration. Transforming business challenges into technical opportunities.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-outline" onClick={handleContactClick}>
            Get In Touch
          </a>
        </div>
      </div>
      <ScrollHint />
    </section>
  );
}
