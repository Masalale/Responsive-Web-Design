"use client";

import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  // Group skills into rows of 2
  const rows: (typeof skillCategories)[] = [];
  for (let i = 0; i < skillCategories.length; i += 2) {
    rows.push(skillCategories.slice(i, i + 2));
  }

  return (
    <section id="skills" className="skills">
      <div className="wrapper">
        <h2 ref={titleRef} className="page-title">
          Technical Skills
        </h2>
        <div className="portfolio-grid">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((category, cardIndex) => (
                <Card key={cardIndex}>
                  <header className="card-header">
                    <h3>{category.title}</h3>
                  </header>
                  <p className="card-description">{category.description}</p>
                  <div className="tech-stack">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
