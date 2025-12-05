"use client";

import { useRef } from "react";
import { socialLinks } from "@/data/social";
import { SocialLink } from "@/components/ui/SocialLink";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="contact" className="contact">
      <div className="wrapper">
        <h2 ref={titleRef} className="page-title">
          Let&apos;s Work Together
        </h2>
        <p className="contact-description">
          I&apos;m always interested in new opportunities and interesting projects.
        </p>
        <div className="social-links">
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
