import React from "react";
import { Label } from "./ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkboxes, IdentificationTypes } from "@/constants";
import { Input } from "./ui/input";
import { FileUploader } from "./FileUploader";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Identification = () => {
  const Router = useRouter()
  return (
    <div className="sub-container max-w-[696px] space-y-8">
      <h1 className="header">Identification and Verification</h1>

      <div className="flex flex-col gap-4">
        <Label className="text-dark-700">Identification type</Label>
        <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Identification type" />
            </SelectTrigger>
            <SelectContent className="bg-dark-300">
              <SelectGroup className="bg-dark-300">
                <SelectLabel>Identification types</SelectLabel>
                {IdentificationTypes.map((item) => (
                  <SelectItem key={item} value={item} className="h-11">
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label className="text-dark-700">Identification Number</Label>
        <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
          <Input
            // type="email"
            placeholder="ex: 123456789"
            className="shad-input border-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label className="text-dark-700">
          Scanned Copy of Identification Document
        </Label>
        <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
          <FileUploader />
        </div>
      </div>

      <div className="sub-container max-w-[696px] space-y-8">
        <h1 className="header mt-10">Consent and Privacy</h1>
        <div className="flex flex-col">
          {checkboxes.map((item,idx) => (
            <div className="flex items-center gap-3 mb-3" key={idx}>
              <Checkbox id="terms" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100" onClick={() => Router.push('/appointments')}>
        Submit and Continue
      </Button>
    </div>
  );
};

export default Identification;
