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
    <section id="work" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full">
        <TitleHeader title="My Work" />

        <div className="mt-8 flex justify-center px-0 md:px-5">
          <div className="flex w-full max-w-[1600px] flex-col gap-6">
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
