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

const HomePage = () => {
  const [id, setID] = useState("");
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  
  useEffect(() => {
    useGetUser().then((res) => {
      setID(res?.id as string);
      setName(res?.user_metadata.full_name as string)
      setEmail(res?.email as string)
    });
  },[]);

  const router = useRouter();
  return (
    <div className="text-white">
      <h1>HomePage</h1>
      <h1>Hello {name}</h1>
      <h1>Email is {email}</h1>
      <form action={logout}>
        <button
          type="submit"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Logout
        </button>
      </form>
      <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" onClick={() => router.push(`/patients/${id}/registration`)}>
        registration
      </button>
    </div>
  );
};

export default HomePage;
