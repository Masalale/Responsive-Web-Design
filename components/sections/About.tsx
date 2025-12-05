"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal([titleRef, gridRef]);

  return (
    <section id="about" className="about">
      <div className="wrapper">
        <h2 ref={titleRef} className="page-title">
          About Me
        </h2>
        <div ref={gridRef} className="content-grid">
          <div className="text-content">
            <h3>
              Hello! I&apos;m Clarence Chomba,
              <br />A Software Engineer with practical IT support and business operations
              experience.
            </h3>
            <p>
              I&apos;ve gained diverse exposure to IT operations, business management, and
              technical problem-solving through work in family-owned businesses. I&apos;m a
              self-taught Linux user with experience in system administration, command-line
              tools, and troubleshooting. Passionate about experimenting with technology
              from an early age—rooting Android devices, testing Linux distributions, and
              building personal projects.
            </p>
          </div>
          <div className="image-content">
            <Image
              src="/images/IMG-20250122-WA0025.jpg"
              alt="Clarence Chomba"
              className="profile-pic"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
