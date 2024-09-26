"use client";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { useGetUser } from "@/hooks/useGetUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IconCalendarTime } from "@tabler/icons-react";
import { IconHourglass } from "@tabler/icons-react";
import { IconAlertTriangle } from "@tabler/icons-react";
import { DataTableDemo } from "@/components/DataTabel";
import { createClient } from "@/utils/supabase/client";

const MyAppointments = () => {
  const supabase = createClient();
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [appointmentData, setAppointmentData] = useState<any>([]);

  useEffect(() => {
    useGetUser().then((res) => {
      setID(res?.id as string);
      setName(res?.user_metadata.full_name as string);
      if (res?.id) {
        getAppointments(res?.id);
      }
    });
  }, []);

  const getAppointments = async (id: string) => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("id", id);
    if (error) {
      console.log("error occurred", error.message);
    } else {
      console.log("fetched successfully");
      // console.log(data);
      setAppointmentData(data);
    }
  };

  const tableData = appointmentData.map((item: any) => [
    {
      id: item.appointmentID,
      doctor: item.doctorName,
      date: item.dateOfAppointment,
      status: item.isScheduled
        ? "Scheduled"
        : item.isCancelled
        ? "Cancelled"
        : "Pending",
      appointmentReason: item.appointmentReason,
    },
  ]);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove scrollbar container my-auto border-white">
        <div className="sub-container max-w-[796px] space-y-8">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-3 w-fit"
          />
          <div className="mb-12 space-y-4">
            <h1 className="header">Welcome {name}👋</h1>
            <p className="text-dark-700">See your Appointments here!!</p>
          </div>
        </div>
        <div className="mx-auto flex size-full py-10 max-w-[796px] space-x-5">
          <div className="bg-black-900 w-[33%] rounded-lg p-3 flex flex-col space-y-3">
            <p className="flex gap-2 item-center">
              <IconCalendarTime stroke={1} color="yellow" size={50} />
              <span className="text-[30px]">0</span>
            </p>
            <p>Total number of scheduled appointments</p>
          </div>
          <div className="bg-black-900 w-[33%] rounded-lg p-3 flex flex-col space-y-3">
            <p className="flex gap-2">
              <IconHourglass stroke={1} color="aqua" size={50} />
              <span className="text-[30px]">0</span>
            </p>
            <p>Total number of pending appointments</p>
          </div>
          <div className="bg-black-900 w-[33%] rounded-lg p-3 flex flex-col space-y-3">
            <p className="flex gap-2">
              <IconAlertTriangle stroke={1} color="red" size={50} />
              <span className="text-[30px]">0</span>
            </p>
            <p>Total number of cancelled appointments</p>
          </div>
        </div>
        <div className="sub-container max-w-[796px] space-y-8">
          <DataTableDemo data={tableData}/>
        </div>
        {/* <FloatingDockDemo /> */}
      </section>
    </div>
  );
};

export default MyAppointments;
