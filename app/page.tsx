"use client";
import BusForm from "@/components/BusForm";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  // TODO: Fix Fonts
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-white min-h-screen relative text-black">
      <div className="absolute z-0 h-[495px] w-full bg-linear-to-b from-[#F5F8FF] to-[#DBF5FF]"></div>
      <div className="relative z-10">
        <div className="w-full h-[100px] flex items-center">
          <Image
            src="/tripzy.svg"
            alt="Tripzy"
            width={126}
            height={40}
            className="ml-[279px]"
          />
        </div>
        <div className="mt-[103px] mb-10 text-center">
          <h1 className="text-h1">Travel Smarter, Not Harder</h1>
          <p>
            Make every trip effortless. Tripzy lets you book rides and plan
            journeys with ease
          </p>
        </div>
        <div className="max-w-[1176px] w-full bg-white justify-self-center flex flex-col gap-6 rounded-2xl pb-6 shadow-[0px_8px_32px_0px_rgba(32,80,118,0.12)]">
          <div className="flex w-full rounded-2xl p-3 shadow-[0px_4px_12px_0px_rgba(32,80,118,0.12)]">
            <div
              className={`flex flex-1 px-4 py-3 cursor-pointer rounded-2xl gap-3 items-center ${
                activeTab === 1 ? "bg-[#EBF9FF]" : "bg-white"
              }`}
              onClick={() => setActiveTab(1)}
            >
              <Image
                src="/bus.svg"
                alt="Bus & Shuttle"
                width={48}
                height={48}
              />
              <p className="text-[#121216]">Bus &amp; Shuttle</p>
            </div>
            <div
              className={`flex flex-1 px-4 py-3 cursor-pointer rounded-2xl gap-3 items-center ${
                activeTab === 2 ? "bg-[#F4FFEB]" : "bg-white"
              }`}
              onClick={() => setActiveTab(2)}
            >
              <Image src="/hotel.svg" alt="Hotel" width={48} height={48} />
              <p className="text-[#121216]">Hotel &amp; Accomodation</p>
            </div>
            <div
              className={`flex flex-1 px-4 py-3 cursor-pointer rounded-2xl gap-3 items-center ${
                activeTab === 3 ? "bg-[#EBF4FF]" : "bg-white"
              }`}
              onClick={() => setActiveTab(3)}
            >
              <Image src="/flight.svg" alt="Flight" width={48} height={48} />
              <p className="text-[#121216]">Flight</p>
            </div>
          </div>
          <BusForm />
        </div>
      </div>
    </div>
  );
}
