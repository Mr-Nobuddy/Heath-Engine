"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MedicalInfo from "@/components/MedicalInfo";

const Registration = () => {
  const [number, setNumber] = useState<E164Number>("");
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState<string>("");
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove scrollbar container my-auto border-white">
        {/* this is personal info block */}
        <div className="sub-container max-w-[696px] space-y-8">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-3 w-fit"
          />
          <div className="mb-12 space-y-4">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">Let us know more about yourself</p>
          </div>
          <div>
            <h1 className="text-32-bold md:text-32-bold">
              Personal Information
            </h1>
          </div>

          <section className="space-y-6">
            <div className="flex flex-col gap-4">
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
                  placeholder="ex: Adam"
                  className="shad-input border-0"
                />
              </div>
            </div>

            <div className="flex flex-col xl:flex-row space-x-4">
              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Email Address</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Image
                    src="/assets/icons/email.svg"
                    alt=""
                    height={24}
                    width={24}
                    className="ml-2"
                  />
                  <Input
                    // type="email"
                    placeholder="johndoe@example.com"
                    className="shad-input border-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Phone Number</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Image
                    src="/assets/icons/phone-call-svgrepo-com.svg"
                    alt=""
                    height={24}
                    width={20}
                    className="ml-2"
                  />
                  <Input
                    // type="email"
                    placeholder="+123456789"
                    className="shad-input border-0"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row space-x-4">
              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Date of Birth</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt=""
                    height={24}
                    width={24}
                    className="ml-2"
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    className="shad-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Gender</Label>

                <RadioGroup
                  defaultValue="comfortable"
                  className="flex items-center h-11"
                >
                  <div className="flex items-center justify-center space-x-2 border-2 border-dark-500 h-11 p-2 rounded-md border-dashed w-[33%] hover:border-green-400">
                    <RadioGroupItem
                      value="default"
                      id="r1"
                      onClick={() => setGender("Male")}
                    />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center justify-center space-x-2 border-2 border-dark-500 h-11 p-2 rounded-md border-dashed w-[33%] hover:border-green-400">
                    <RadioGroupItem
                      value="comfortable"
                      id="r2"
                      onClick={() => setGender("Female")}
                    />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                  <div className="flex items-center justify-center space-x-2 border-2 border-dark-500 h-11 p-2 rounded-md border-dashed w-[33%] hover:border-green-400">
                    <RadioGroupItem
                      value="compact"
                      id="r3"
                      onClick={() => setGender("Other")}
                    />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row space-x-4">
              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Address</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  {/* <Image
                    src="/assets/icons/email.svg"
                    alt=""
                    height={24}
                    width={24}
                    className="ml-2"
                  /> */}
                  <Input
                    // type="email"
                    placeholder="ex: 14th street new york"
                    className="shad-input border-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Occupation</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  {/* <Image
                    src="/assets/icons/email.svg"
                    alt=""
                    height={24}
                    width={24}
                    className="ml-2"
                  /> */}
                  <Input
                    // type="email"
                    placeholder="ex: Software Engineer"
                    className="shad-input border-0"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row space-x-4">
              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">
                  Emergency Contact Number
                </Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  {/* <Image
                    src="/assets/icons/email.svg"
                    alt=""
                    height={24}
                    width={24}
                    className="ml-2"
                  /> */}
                  <Input
                    // type="email"
                    placeholder="Gaurdian's name"
                    className="shad-input border-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Emergency Phone Number</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Image
                    src="/assets/icons/phone-call-svgrepo-com.svg"
                    alt=""
                    height={24}
                    width={20}
                    className="ml-2"
                  />
                  <Input
                    // type="email"
                    placeholder="+123456789"
                    className="shad-input border-0"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <MedicalInfo />
      </section>
    </div>
  );
};

export default Registration;
