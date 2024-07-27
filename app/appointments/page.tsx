"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Doctors } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "react-datepicker";
import { Button } from "@/components/ui/button";

const Appointments = () => {
  const [startDate, setStartDate] = useState(new Date());
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
            <p className="text-dark-700">
              Request a new appointment in 10 seconds
            </p>
          </div>

          <section className="space-y-6">
            <div className="flex flex-col gap-4">
              <Label className="text-dark-700">Full Name</Label>
              <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                {/* <Image
                  src="/assets/icons/icons8-search.svg"
                  alt=""
                  height={24}
                  width={24}
                  className="ml-2"
                /> */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-300">
                    <SelectGroup className="bg-dark-300">
                      <SelectLabel>Doctors</SelectLabel>
                      {Doctors.map((item, idx) => (
                        <SelectItem
                          key={idx}
                          value={item.name}
                          // style={{
                          //   backgroundImage:
                          //     "url('/assets/images/appointments-bg.png')",
                          //   backgroundRepeat: "no-repeat",
                          //   backgroundSize: "100% 60px",
                          // }}
                          className="h-16"
                        >
                          <div className="flex items-center space-x-2">
                            <Image
                              src={item.image}
                              alt="doctor1"
                              width={30}
                              height={30}
                            />
                            <p>{item.name}</p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row space-x-4">
              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">Reason for appointment</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Textarea
                    placeholder="ex: Annual monthly check-up"
                    className="shad-input"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                <Label className="text-dark-700">
                  Additional comments/notes
                </Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Textarea
                    placeholder="ex: Prefer afternoon appointment if possible"
                    className="shad-input"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Label className="text-dark-700">
                Expected Date of appointment
              </Label>
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

            <Button className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100">
              Submit and Continue
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
