"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFields from "../CustomFormFields";
import Image from "next/image";
import { Input } from "../ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "../ui/label";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Badge } from "../ui/badge";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  // email: z.string().min(1,{message:"This field has to be filled"}).email("This is not a valid email")
});

const PatientForms = () => {
  const [number, setNumber] = useState<E164Number>("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      // email:""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        {/* <CustomFormFields
          control={form.control}
          fieldtype={"input"}
          name="name"
          label="Full Name"
          placeholder="Your Full Name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        /> */}

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

        <div className="flex flex-col gap-5">
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
              placeholder="Your Email Address"
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
          className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100"
        >
          SIGN IN WITH OTP
        </Button>
        <div className="w-full flex items-center justify-center">
          <Badge variant="outline">OR</Badge>
        </div>
        <Button
          className="bg-green-600 border-2 border-green-500 hover:bg-green-500 hover:border-green-500 w-full mt-10 hover:scale-110 transition ease-in-out duration-300 active:scale-100"
        >
          <img src="/assets/icons/icons8-google.svg" alt="google" width={30} height={30} className="mr-2"/> SIGN IN WITH GOOGLE
        </Button>
      </form>
    </Form>
  );
};

export default PatientForms;
