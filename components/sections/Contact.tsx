"use client";

import { useRef } from "react";
import { socialLinks } from "@/data/social";
import { SocialLink } from "@/components/ui/SocialLink";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="contact" className="bg-gradient-section min-h-[80vh] flex flex-col justify-center text-center py-24 md:py-20 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-4">
        <h2 ref={titleRef} className="page-title">
          Let&apos;s Work Together
        </h2>
        <p className="hero-description max-w-[600px] mx-auto mb-12 text-sage">
          I&apos;m always interested in new opportunities and interesting projects.
        </p>
        <div className="flex justify-center gap-6 flex-wrap mx-auto max-w-[800px]">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              label={link.label}
              icon={link.icon}
              external={link.external}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
