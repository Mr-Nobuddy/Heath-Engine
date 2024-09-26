"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { useGetUser } from "@/hooks/useGetUser";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const Appointments = () => {
  const supabase = createClient();
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [isInserted,setIsInserted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    useGetUser().then((res) => {
      setID(res?.id as string);
      setName(res?.user_metadata.full_name as string);
    });
  }, []);

  const handleInput = (value: string) => {
    setDoctor(value);
  };

  async function handleSubmit(event: any) {
    if (appointmentReason !== "") {
      event.preventDefault();
      const { data, error } = await supabase.from("appointments").insert([
        {
          id: id,
          doctorName: doctor,
          appointmentReason: appointmentReason,
          additionalNotes: notes,
          dateOfAppointment: date,
          isScheduled:false,
          isCancelled:false,
          appointmentID:uuidv4()
        },
      ]);

      if (error) {
        console.log("error occurred", error.message);
      } else {
        router.push('/success')
        console.log("inserted successfully");
        // console.log(data);
        // setIsInserted(true);

      }
    } else {
      alert("Please fill out all the fields");
    }
  }

  return (
    <div className="flex h-screen max-h-screen">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="remove scrollbar container my-auto border-white"
      >
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
              <h1 className="header">Hey there {name}👋</h1>
              <p className="text-dark-700">
                Request a new appointment in 10 seconds
              </p>
            </div>

            <section className="space-y-6">
              <div className="flex flex-col gap-4">
                <Label className="text-dark-700">Full Name</Label>
                <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                  <Select onValueChange={handleInput}>
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
                  <Label className="text-dark-700">
                    Reason for appointment
                  </Label>
                  <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
                    <Textarea
                      placeholder="ex: Annual monthly check-up"
                      className="shad-input"
                      value={appointmentReason}
                      onChange={(e) => setAppointmentReason(e.target.value)}
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
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
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
                    selected={date}
                    onChange={(date) => setDate(date as Date)}
                    className="shad-input"
                  />
                </div>
              </div>

              <Button 
                className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100"
                // onClick={() => {isInserted ? router.push('/success') : ""}}
              >
                Submit and Continue
              </Button>
            </section>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Appointments;
