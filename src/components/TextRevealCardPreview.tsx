// components/TextRevealCardPreview.tsx
"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry"
      >
        <TextRevealCardTitle>
          Say my name
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        Just kidding, I&rsquo;m not Heisenberg. Still there&rsquo;s a similarity...
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
