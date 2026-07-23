import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const ProjectCard = ({ project }) => {
  return (
    <CardContainer className="max-h-6xl w-full" containerClassName="!py-0 max-h-6xl w-full">
      <CardBody className="group/card relative flex max-h-6xl min-h-88 w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-gray-50 p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] dark:border-white/8 dark:bg-black/70">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/70 via-transparent to-black/5 opacity-80 dark:from-white/5 dark:to-white/0" />

        <CardItem
          translateZ="50"
          className="relative z-10 text-xl font-bold tracking-tight text-neutral-700 dark:text-white">
          {project.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="relative z-10 mt-2 max-w-md text-sm leading-6 text-neutral-500 dark:text-neutral-300">
          {project.subtitle}
        </CardItem>

        <CardItem translateZ="100" className="relative z-10 mt-5 w-full flex-1 overflow-hidden rounded-2xl">
          <img
            src={project.thumbnail}
            height="1000"
            width="1000"
            className="max-h-6xl min-h-40 w-full object-cover transition duration-500 group-hover/card:scale-[1.03]"
            alt={project.title} />
        </CardItem>

        <div className="relative z-10 mt-5 flex items-center justify-between gap-3 pt-1">
          <CardItem
            translateZ={20}
            as="a"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-black/10 px-4 py-2 text-xs font-medium text-neutral-600 transition hover:border-black/20 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:text-white">
            View code →
          </CardItem>

          <CardItem
            translateZ={20}
            as="a"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-black">
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;