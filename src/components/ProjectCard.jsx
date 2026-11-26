import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  // Portal to <body> so the card's 3D transforms don't break `position: fixed`.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-black/80">
          ✕
        </button>

        <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-300">
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-start rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-80 md:self-auto">
            Explore
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = React.useCallback(() => setIsOpen(false), []);

  return (
    <>
      <CardContainer className="h-full w-full" containerClassName="!py-0 h-full w-full">
        <CardBody
          className="group/card relative flex h-full min-h-88 w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-black/10 bg-gray-50 p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] dark:border-white/8 dark:bg-black/70">
          <div
            role="button"
            tabIndex={0}
            aria-label={`Open ${project.title} preview`}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(true);
              }
            }}
            className="absolute inset-0 z-0 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/70 via-transparent to-black/5 opacity-80 dark:from-white/5 dark:to-white/0" />

          <CardItem
            translateZ="50"
            className="pointer-events-none relative z-10 text-xl font-bold tracking-tight text-neutral-700 dark:text-white">
            {project.title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="pointer-events-none relative z-10 mt-2 line-clamp-3 max-w-xl text-sm leading-6 md:min-h-18 text-neutral-500 dark:text-neutral-300">
            {project.subtitle}
          </CardItem>

          <CardItem
            translateZ="100"
            className="pointer-events-none relative z-10 mt-5 w-full overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5"
            style={{ aspectRatio: project.aspect ?? 16 / 9 }}>
            <img
              src={project.thumbnail}
              className="h-full w-full object-cover"
              alt={project.title}
            />
          </CardItem>

          <div className="pointer-events-none relative z-10 mt-auto flex items-center justify-end gap-3 pt-5">
            <CardItem
              translateZ={20}
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-black">
              Explore
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {isOpen && <ProjectModal project={project} onClose={close} />}
    </>
  );
};

export default ProjectCard;
