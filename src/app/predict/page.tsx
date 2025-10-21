import ComparisonCard from "@/components/ComparisonCard";
import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import React from "react";


function PredictPage() {
  return (
    <div className="w-full">
      <MainNavbar />
      <div className="bg-gray-100 min-h-screen p-9">
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
              title="Model CNN + Mish"
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
