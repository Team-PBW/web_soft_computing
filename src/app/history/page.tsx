"use client";

import ComparisonCard from "@/components/ComparisonCard";
import FloatLoginForm from "@/components/FloatLoginForm";
import FloatRegisterForm from "@/components/FloatRegisterForm";
import HistoryTable from "@/components/HistoryTable";
import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import React, { useEffect, useState } from "react";

function HistoryPage() {
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

        <div className="flex justify-center items-center">
          <HistoryTable />
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
