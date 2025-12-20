"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressUpload() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-[60%]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md" />
      <Progress value={progress} className="relative h-3 rounded-full bg-gray-200 overflow-hidden" />
    </div>
  );
}
