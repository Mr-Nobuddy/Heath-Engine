import Image from "next/image";
import React from "react";

const Appointments = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove scrollbar container my-auto border-white">
        <div className="sub-container max-w-[696px] space-y-8">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-3 w-fit"
          />
          <div className="mb-12 space-y-4">
            <h1 className="header">Hey there 👋</h1>
            <p className="text-dark-700">Request a new appointment in 10 seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
