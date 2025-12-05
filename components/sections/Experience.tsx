"use client";

import { useRef } from "react";
import { experience } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Experience() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="experience" className="work">
      <div className="wrapper">
        <h2 ref={titleRef} className="page-title">
          Professional Experience
        </h2>
        <div className="work-content">
          <div className="timeline">
            {experience.map((job, index) => (
              <article key={index} className="job">
                <h3 className="company">{job.company}</h3>
                <p className="role">{job.role}</p>
                <time className="period">{job.period}</time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
