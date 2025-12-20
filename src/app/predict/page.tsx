"use client";

import ComparisonCard from "@/components/ComparisonCard";
import FloatLoginForm from "@/components/FloatLoginForm";
import FloatRegisterForm from "@/components/FloatRegisterForm";
import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import React, { useEffect, useState } from "react";

function PredictPage() {
  const [showFormRegister, setShowFormRegister] = useState<boolean>(false);

  useEffect(() => {
    if (showFormRegister) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFormRegister]);

  return (
    <div className="w-full relative">
      <MainNavbar />
      <div className="bg-gray-100 min-h-screen p-9">
        {showFormRegister && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <FloatRegisterForm />
          </div>
        )}
        <div className="ml-9 flex flex-col gap-[3rem]">
          <UploadCard />

          <div className="font-['Inter'] font-bold text-[24px] leading-[150%] tracking-[0em] align-middle">
            Comparison Result
          </div>
          <div className="flex w-full gap-8">
            <ComparisonCard
              title="Model CNN + ReLU"
              genre="Rock"
              executeTime={"0.2ms"}
            />
            <ComparisonCard
              title="odel CNN + Mish"
              genre="Rock"
              executeTime={"0.5ms"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictPage;
