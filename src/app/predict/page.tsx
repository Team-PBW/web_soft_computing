"use client";

import ComparisonCard from "@/components/ComparisonCard";
import FloatLoginForm from "@/components/FloatLoginForm";
import FloatRegisterForm from "@/components/FloatRegisterForm";
import Footer from "@/components/MainFooter";
import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import React, { useEffect, useState } from "react";

function PredictPage() {
  const [files, setFiles] = useState<File[] | null>(null);

  return (
    <section>
      <MainNavbar />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <UploadCard onFilesChange={setFiles}/>

          {files && files.length > 0 && (
            <>
              <div className="max-w-4xl mx-auto text-center my-auto">
                {/* Heading */}
                <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                  Comparison Result <br />
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  {files?.[0]?.name}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <ComparisonCard
                  title="Model CNN + ReLU"
                  genre="Rock"
                  executeTime="0.2ms"
                />
                <ComparisonCard
                  title="Model CNN + Mish"
                  genre="Rock"
                  executeTime="0.5ms"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default PredictPage;
