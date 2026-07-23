import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-fr",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ children, className }) => {
  return <div className={cn("h-full", className)}>{children}</div>;
};