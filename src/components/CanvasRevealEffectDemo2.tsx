"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export function CanvasRevealEffectDemo2() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/tracing-beam-demo');
  };

return (
    <div className="w-screen h-screen overflow-hidden relative">
        <AnimatePresence>
            <div className="h-full w-full absolute inset-0">
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={[
                        [236, 72, 153],
                        [232, 121, 249],
                    ]}
                    dotSize={2}
                />
            </div>
        </AnimatePresence>
        <div className="relative z-20 flex items-center justify-center h-full flex-col">
            <h2 className="text-white text-3xl font-bold mb-8">
                With insomnia, nothing&apos;s real. Everything is far away.
            </h2>
            <h2 className="text-white text-3xl font-bold mb-8">
                Everything is a copy, of a copy, of a copy
            </h2>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Go to Main Page
            </button>
        </div>
    </div>
);
}
