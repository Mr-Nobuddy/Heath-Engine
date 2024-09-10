import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo({name}:{name:string}) {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        {/* What&apos;s cooler than Beams?{" "} */}
        Trusted Care, Just a Click Away
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-cyan-200 via-green-300 to-teal-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">with HealthEngine</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-200 via-green-300 to-teal-700 py-4">
            <span className="">with HealthEngine</span>
          </div>
        </div>
      </h2>
      <h2 className="text-xl relative z-20 md:text-2xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Hello,
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-cyan-200 via-green-300 to-teal-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">{name}</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-200 via-green-300 to-teal-700 py-4">
            <span className="">{name}</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
