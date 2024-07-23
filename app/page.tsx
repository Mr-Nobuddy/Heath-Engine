import PatientForms from "@/components/forms/PatientForms";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

          <PatientForms />

          <div className="text-14-regular flex justify-between mt-14">
            <p className="justify-items-end text-dark-600 xl:text-left p-2">
              © 2024 HeathEngine
            </p>
            <Link
              href="/admin"
              className="text-green-500 border-2 border-transparent hover:border-green-400 transition ease-in-out duration-300 p-2 rounded-md"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className="w-[50%]">
        <img
          src="/assets/images/new-doctor.avif"
          alt="onboarding"
          className="w-full"
        />
      </div>
      {/* <Image
        src="/assets/images/onboarding-img.png"
        alt="onboarding"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      /> */}
    </div>
  );
}
