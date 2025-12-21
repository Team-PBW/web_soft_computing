"use client";

import ComparisonCard from "@/components/ComparisonCard";
import FloatLoginForm from "@/components/FloatLoginForm";
import FloatRegisterForm from "@/components/FloatRegisterForm";
import Footer from "@/components/MainFooter";
import MainNavbar from "@/components/MainNavbar";
import UploadCard from "@/components/UploadCard";
import React, { useEffect, useState } from "react";

interface ModelSummary {
  total_segments: number;
  avg_confidence: number;
  final_class: number;
}

interface ModelResult {
  summary: ModelSummary;
  computation_time_sec: number;
  time_per_seg_sec: number;
}

interface PredictionResponse {
  file_name: string;
  content_type: string;
  sample_rate: number;
  num_samples: number;
  result: {
    relu: ModelResult;
    mish: ModelResult;
  };
}


function PredictPage() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [prediction, setPrediction] =
  useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const uploadAndPredict = async (file: File) => {
    try {
      setLoading(true);
      setPrediction(null);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://52.74.187.173:8000/music/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal memproses audio");

      const data: PredictionResponse = await res.json();
      if (!data.result || !data.result.relu || !data.result.mish) {
        console.error("Invalid API response:", data);
        return;
      }

      setPrediction(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadUrlPredict = async (url: string) => {
    try {
      setLoading(true);
      setPrediction(null);

      const res = await fetch(
        "http://52.74.187.173:8000/music/predict_download",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            youtube_url: url,
          }),
        }
      );

      if (!res.ok) throw new Error("Gagal download audio");

      const data: PredictionResponse = await res.json();
      setPrediction(data);
    } catch (err) {
      console.error(err);
      alert("Gagal memproses URL audio");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (files && files.length > 0) {
      uploadAndPredict(files[0]); 
    }
  }, [files]);

  return (
    <section>
      <MainNavbar />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <UploadCard 
            onFilesChange={setFiles}
            onUrlSubmit={uploadUrlPredict}
          />

          {files && files.length > 0 && (
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
                Comparison Result
              </h1>
              <p className="mt-4 text-gray-600">
                {files[0].name}
              </p>
            </div>
          )}

          {loading && (
            <p className="text-center text-gray-500">
              Processing audio, mohon tunggu...
            </p>
          )}

          {prediction && (
            <div className="flex flex-col lg:flex-row gap-8">
              <ComparisonCard
                title="Model CNN + ReLU"
                genre={`Class ${prediction.result.relu.summary.final_class}`}
                executeTime={`${prediction.result.relu.computation_time_sec}s`}
              />

              <ComparisonCard
                title="Model CNN + Mish"
                genre={`Class ${prediction.result.mish.summary.final_class}`}
                executeTime={`${prediction.result.mish.computation_time_sec}s`}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default PredictPage;
