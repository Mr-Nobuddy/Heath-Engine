"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const [number, setNumber] = useState<E164Number>("");
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] space-y-8">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-3 w-fit"
          />

          <section className="mb-12 space-y-4">
            <h1 className="header">Hi there admin👋</h1>
            <p className="text-dark-700">Check your patients here!</p>
          </section>

          <div className="flex flex-col gap-5">
            <Label className="text-dark-700">Full Name</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Image
                src="/assets/icons/user.svg"
                alt=""
                height={24}
                width={24}
                className="ml-2"
              />
              <Input
                // type="email"
                placeholder="Your Full Name"
                className="shad-input border-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-dark-700">Phone Number</Label>

            <PhoneInput
              placeholder="Enter phone number"
              onChange={setNumber}
              className="input-phone border-2 border-dark-300"
            />
          </div>
          <Button
            type="submit"
            className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-200 active:scale-100"
          >
            Sign in with OTP
          </Button>
        </div>
      </section>
      <div className="w-[50%]">
        <img
          src="/assets/images/onboarding-img.png"
          alt="onboarding"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
