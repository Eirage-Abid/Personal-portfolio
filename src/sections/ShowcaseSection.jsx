import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ProjectCard from "@/components/ProjectCard";
import TitleHeader from "../components/TitleHeader";
import { showcaseCards } from "../constants";

const AppShowcase = () => {
  return (
    <section id="work" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full">
        <TitleHeader title="My Work" />
        
        <div className="mt-8 flex justify-center px-5">
          <BentoGrid className="w-full max-w-6xl">
            {showcaseCards.map((project) => (
              <BentoGridItem key={project.id} className={project.spanClassName}>
                <ProjectCard project={project} />
              </BentoGridItem>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;