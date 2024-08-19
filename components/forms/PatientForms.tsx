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
import { useRouter } from "next/navigation";
import { login, signup, signWithGoogle } from "@/app/login/actions";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   // email: z.string().min(1,{message:"This field has to be filled"}).email("This is not a valid email")
// });

const PatientForms = ({ id, first }: { id: string; first: boolean }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Router = useRouter();

  return (
    // <Form {...form}>
    // </Form>
    <form>
      <div>
        <div className="space-y-6 flex-1">
          <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment</p>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              <Input value={id} className="hidden" name="id" />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Label className="text-dark-700">Password</Label>
            <div className="flex rounded-md border-2 border-dark-500 bg-dark-400 hover:border-green-400">
              <Image
                src="/assets/icons/icons8-password.svg"
                alt=""
                height={24}
                width={24}
                className="ml-2"
              />
              <Input
                // type="email"
                placeholder="Your Password"
                className="shad-input border-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
          </div>

          <div className="w-full flex gap-5">
            <Button
              type="submit"
              className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-[50%] mt-10 hover:scale-110 transition ease-in-out duration-200 active:scale-100"
              formAction={login}
            >
              Log In
            </Button>
            <Button
              type="submit"
              className="bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-400 w-[50%] mt-10 hover:scale-110 transition ease-in-out duration-200 active:scale-100"
              formAction={signup}
            >
              Sign up
            </Button>
          </div>

          <div className="w-full flex items-center justify-center">
            <Badge variant="outline">OR</Badge>
          </div>
          <Button className="bg-green-600 border-2 border-green-500 hover:bg-green-500 hover:border-green-500 w-full mt-10 hover:scale-110 transition ease-in-out duration-200 active:scale-100" formAction={signWithGoogle}>
            <img
              src="/assets/icons/icons8-google.svg"
              alt="google"
              width={30}
              height={30}
              className="mr-2"
            />{" "}
            Sign in with Google
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PatientForms;
