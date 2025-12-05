"use client";

import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  // Group projects into rows of 2
  const rows: (typeof projects)[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="portfolio">
      <div className="wrapper">
        <h2 ref={titleRef} className="page-title">
          GitHub Projects
        </h2>
        <div className="portfolio-grid">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((project, projectIndex) => (
                <Card key={projectIndex}>
                  <header className="card-header">
                    <h3>{project.title}</h3>
                    <div className="links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        <Github size={14} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          <ExternalLink size={14} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                          Live Site
                        </a>
                      )}
                    </div>
                  </header>
                  <p className="card-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tag">
                        {tech}
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
