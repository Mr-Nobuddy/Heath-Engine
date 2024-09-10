"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export function AnimatedTooltipPreview({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  const people = [
    {
      id: 1,
      name: name,
      image:image
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
