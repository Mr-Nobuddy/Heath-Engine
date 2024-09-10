'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Success = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove scrollbar container my-auto border-white">
        <div className="sub-container max-w-[696px] space-y-8 items-center">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-3 w-fit"
          />
          <Image
            src="/assets/gifs/success.gif"
            alt="success"
            width={2000}
            height={2000}
            className="mb-3 w-fit"
          />
          <div>
            <h2 className="text-lg relative z-20 md:text-xl lg:text-3xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              Your appointment request has been&nbsp;
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-cyan-200 via-green-300 to-teal-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">successfully submitted</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-200 via-green-300 to-teal-700 py-4">
                  <span className="">successfully submitted</span>
                </div>
              </div>
            </h2>
            <div className="flex flex-col items-center justify-center space-y-3">
              <p className="text-dark-600">
                We&apos;ll be in touch shortly to confirm
              </p>

              <button
                className="p-[3px] relative"
                onClick={() => router.push('/')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-700 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Go to Home
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
