import React from "react";
import ProjectCard from "@/components/ProjectCard";
import TitleHeader from "../components/TitleHeader";
import { showcaseCards } from "../constants";

// Two cards per row on desktop.
const rows = [];
for (let i = 0; i < showcaseCards.length; i += 2) {
  rows.push(showcaseCards.slice(i, i + 2));
}

const AppShowcase = () => {
  return (
    <section id="work" className="flex-center px-5 md:px-10 mt-10 md:mt-16">
      <div className="site-container">
        <TitleHeader title="My Work" />

        <div className="mt-8 flex justify-center">
          <div className="flex w-full flex-col gap-6">
            {rows.map((row, i) => (
              <div key={i} className="flex flex-col gap-6 md:flex-row md:justify-center">
                {row.map((project) => (
                  // Width proportional to the image's aspect ratio, so every
                  // image in a row renders at the same height (no empty gaps).
                  // A card alone in its row is capped and centered so it doesn't
                  // stretch across the full section.
                  <div
                    key={project.id}
                    className={`md:[flex:var(--aspect)_1_0%] md:min-w-0 ${
                      row.length === 1 ? "md:max-w-4xl" : ""
                    }`}
                    style={{ "--aspect": project.aspect ?? 16 / 9 }}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
