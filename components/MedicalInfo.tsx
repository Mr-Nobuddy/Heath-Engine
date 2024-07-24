import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import Image from "next/image";
import { Doctors } from "@/constants";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";

const MedicalInfo = () => {
  return (
    <div className="sub-container max-w-[696px] space-y-8">
      <h1 className="header">Medical Information</h1>

      <div className="flex flex-col gap-4">
        <Label className="text-dark-700">Primary Physician</Label>
        <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
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
        <div className="flex flex-col xl:flex-row space-x-4">
          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Insurance Provider</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Input
                // type="email"
                placeholder="ex: BlueCross"
                className="shad-input border-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Insurance Policy Number</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Input
                // type="email"
                placeholder="ex: ABC1234567"
                className="shad-input border-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row space-x-4">
          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Allergies(if any)</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Textarea placeholder="ex: Peanuts, Penicilin, Pollen" className="shad-input"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Current Medication</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Textarea placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg" className="shad-input"/>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row space-x-4">
          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Family medical history(if relevant)</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Textarea placeholder="ex: Mother has sugar and blood pressure problems" className="shad-input"/>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full xl:w-[50%]">
            <Label className="text-dark-700">Past medical history</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Textarea placeholder="ex: Asthama diagnosis in childhood" className="shad-input"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;
