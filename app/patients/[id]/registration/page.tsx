"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MedicalInfo from "@/components/MedicalInfo";
import Identification from "@/components/Identification";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkboxes, Doctors, IdentificationTypes } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUploader } from "@/components/FileUploader";
import { createClient } from "@/utils/supabase/client";
import { useGetUser } from "@/hooks/useGetUser";

const Registration = () => {
  const supabase = createClient();

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [primaryPhysician, setPrimaryPhysician] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [allergies, setAllergies] = useState("");
  const [currentMedication, setCurrentMedication] = useState("");
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");
  const [pastMedicalHistory, setPastMedicalHistory] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");

  useEffect(() => {
    useGetUser().then((res) => {
      setID(res?.id as string);
      setName(res?.user_metadata.full_name as string);
      setEmail(res?.email as string);
    });
  }, []);

  const router = useRouter();

  async function handleSubmit(e: any) {
    if (
      number === "" &&
      address === "" &&
      occupation === "" &&
      emergencyContactName === "" &&
      emergencyContactNumber === "" &&
      insuranceProvider === "" &&
      insurancePolicyNumber === "" &&
      allergies === "" &&
      currentMedication === "" &&
      familyMedicalHistory === "" &&
      pastMedicalHistory === ""
    ) {
      alert("Please fill all the fields");
    } else {
      e.preventDefault();
      const { data, error } = await supabase.from("patient").insert([
        {
          id: id,
          name: name,
          email: email,
          phone_number: number,
          dob: startDate,
          gender: gender,
          address: address,
          occupation: occupation,
          emergencyContactName: emergencyContactName,
          emergencyPhoneNumber: emergencyContactNumber,
          primaryPhysician: primaryPhysician,
          insuranceProvider: insuranceProvider,
          insurancePolicyNumber: insurancePolicyNumber,
          allergy: allergies,
          currentMedication: currentMedication,
          familyMedicalHistory: familyMedicalHistory,
          pastMedicalHistory: pastMedicalHistory,
          identificationType: identificationType,
          identificationNumber: identificationNumber,
          documentUrl: documentUrl,
        },
      ]);

      if (error) {
        console.log("error occurred", error);
      } else {
        console.log("inserted successfully");
      }
    }
  }

  const setPhysician = (doctor:string) => {
    setPrimaryPhysician(doctor)
    console.log(doctor);
  }

  return (
    <div className="flex h-screen max-h-screen">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="remove scrollbar container my-auto border-white"
      >
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
              <h1 className="header">Welcome {name}👋</h1>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
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

                {/* Gender */}
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row space-x-4">
                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">
                    Emergency Contact Name
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
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">
                    Emergency Phone Number
                  </Label>
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
                      value={emergencyContactNumber}
                      onChange={(e) =>
                        setEmergencyContactNumber(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* <MedicalInfo /> */}

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
                          className="h-16"
                          onClick={() => {
                            // setPrimaryPhysician(item.name)
                            setPhysician(item.name)
                          }}
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
                      value={insuranceProvider}
                      onChange={(e) => setInsuranceProvider(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">
                    Insurance Policy Number
                  </Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Input
                      // type="email"
                      placeholder="ex: ABC1234567"
                      className="shad-input border-0"
                      value={insurancePolicyNumber}
                      onChange={(e) => setInsurancePolicyNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row space-x-4">
                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">Allergies(if any)</Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Textarea
                      placeholder="ex: Peanuts, Penicilin, Pollen"
                      className="shad-input"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">Current Medication</Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Textarea
                      placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
                      className="shad-input"
                      value={currentMedication}
                      onChange={(e) => setCurrentMedication(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row space-x-4">
                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">
                    Family medical history(if relevant)
                  </Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Textarea
                      placeholder="ex: Mother has sugar and blood pressure problems"
                      className="shad-input"
                      value={familyMedicalHistory}
                      onChange={(e) => setFamilyMedicalHistory(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full xl:w-[50%]">
                  <Label className="text-dark-700">Past medical history</Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Textarea
                      placeholder="ex: Asthama diagnosis in childhood"
                      className="shad-input"
                      value={pastMedicalHistory}
                      onChange={(e) => setPastMedicalHistory(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Identification /> */}

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
                        <SelectItem
                          key={item}
                          value={item}
                          className="h-11"
                          onClick={() => setIdentificationType(item)}
                        >
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
                  value={identificationNumber}
                  onChange={(e) => setIdentificationNumber(e.target.value)}
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
                {checkboxes.map((item, idx) => (
                  <div className="flex items-center gap-3 mb-3" key={idx}>
                    <Checkbox id="terms" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100"
            >
              Submit and Continue
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Registration;
