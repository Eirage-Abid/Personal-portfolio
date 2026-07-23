"use client";;
import React, { useState } from "react";
import{ motion as Motion }  from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({
  cards
}) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(null);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(null);
    setSelected(null);
  };

  return (
    <div
      className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
                <Motion.div
            onClick={() => handleClick(card)}
            className={cn(card.className, "relative overflow-hidden min-h-[240px]", selected?.id === card.id
              ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
              : lastSelected?.id === card.id
              ? "z-40 bg-white rounded-xl h-full w-full"
              : "bg-white rounded-xl h-full w-full")}
            layoutId={`card-${card.id}`}>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </Motion.div>
        </div>
      ))}
      <Motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} />
    </div>
  );
};

const ImageComponent = ({
  card
}) => {
  return (
    <Motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail" />
  );
};

const SelectedCard = ({
  selected
}) => {
  return (
    <div
      className=" h-full w-full flex flex-col justify-end rounded-lg relative z-[60]">
      <Motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10" />
      <Motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]">
        {selected?.content}
      </Motion.div>
    </div>
  );
};
