// 'use client'
// import PatientForms from "@/components/forms/PatientForms";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useGetUser } from "@/hooks/useGetUser";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [id,setID] = useState('');
//   const [isFirstTime,setIsFirstTime] = useState(true);
//   useEffect(() => {
//     useGetUser().then((res) => {
//       // console.log(res);
//       setID(res?.id as string);
//       if(res?.id){
//         setIsFirstTime(false);
//       }
//     })
//   })
//   return (
//     <div className="flex h-screen max-h-screen">
//       <section className="remove-scrollbar container my-auto">
//         <div className="sub-container max-w-[496px] space-y-8">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             alt="patient"
//             width={1000}
//             height={1000}
//             className="mb-3 w-fit"
//           />

//           <PatientForms id={id} first={isFirstTime}/>

//           <div className="text-14-regular flex justify-between mt-14">
//             <p className="justify-items-end text-dark-600 xl:text-left p-2">
//               © 2024 HeathEngine
//             </p>
//             <Link
//               href="/admin"
//               className="text-green-500 border-2 border-transparent hover:border-green-400 transition ease-in-out duration-300 p-2 rounded-md"
//             >
//               Admin
//             </Link>
//           </div>
//         </div>
//       </section>
//       <div className="w-[50%]">
//         <img
//           src="/assets/images/new-doctor.avif"
//           alt="onboarding"
//           className="w-full"
//         />
//       </div>
//       {/* <Image
//         src="/assets/images/onboarding-img.png"
//         alt="onboarding"
//         height={1000}
//         width={1000}
//         className="side-img max-w-[50%]"
//       /> */}
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { logout } from "./logout/actions";
import { useGetUser } from "@/hooks/useGetUser";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { BackgroundBeamsWithCollisionDemo } from "@/components/Hero";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constants";
import { IconHome } from "@tabler/icons-react";
import { IconDashboard } from '@tabler/icons-react';
import { IconUserCircle } from '@tabler/icons-react';

const HomePage = () => {
  const supabase = createClient();
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    useGetUser().then((res) => {
      // console.log(res)
      setID(res?.id as string);
      setName(res?.user_metadata.full_name as string);
      setEmail(res?.email as string);
      setImage(res?.user_metadata.avatar_url as string);
      if (res?.email) {
        checkUser(res?.email);
      }
    });
  }

  const checkUser = async (mail: string) => {
    const { data, error } = await supabase
      .from("patient")
      .select("name")
      .eq("email", mail);

    if (error) {
      console.log("error occurred", error);
    } else {
      // console.log(data.length);
      if (data.length !== 0) {
        setUserExists(true);
      }
    }
  };

  const router = useRouter();

  // const FloatingNavItems = [
  //   {
  //     title: "Home",
  //     icon: (
  //       <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href:'/'
  //   },
  //   {
  //     title:'My Appointments',
  //     icon:(
  //       <IconDashboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href:'/myappointments'
  //   },
  //   {
  //     title:"Profile",
  //     icon:(
  //       <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href:'/profile'
  //   }
  // ];

  return (
    <div>
      {/* Navbar */}
      <FloatingNav navItems={navItems} name={name} image={image} />

      {/* Hero section */}
      <BackgroundBeamsWithCollisionDemo name={name} />

      {/* appointments section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Book Appointments <br /> in Just a Click <br/>

        </motion.h1>
        {userExists ? (
          <button
            className="p-[3px] relative"
            onClick={() => router.push(`/patients/${id}/appointments`)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-700 rounded-lg" />
            <div className="px-8 py-2  bg-black-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Book an Appointment
            </div>
          </button>
        ) : (
          <button
            className="p-[3px] relative"
            onClick={() => router.push(`/patients/${id}/registration`)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-700 rounded-lg" />
            <div className="px-8 py-2  bg-black-900 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Register yourself
            </div>
          </button>
        )}
      </LampContainer>
    </div>
  );
};

export default HomePage;
