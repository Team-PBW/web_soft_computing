"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import { ProgressUpload } from "./ProgressUpload";
import { IoMdClose } from "react-icons/io";

const UploadCard = () => {
  const [files, setFiles] = useState<File[] | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };
  return (
    <div className="px-9 py-2 bg-white w-1/2 h-1/2 flex flex-col gap-7">
      <h1 className="mt-5 font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[150%] tracking-[-0.03em] align-middle">
        Upload File Music
      </h1>
      <Dropzone
        maxFiles={3}
        onDrop={handleDrop}
        onError={console.error}
        src={files}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>

      <div className="flex items-center gap-5 mb-9 w-full justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-['DM_Sans'] font-semibold text-[14px]">
            BMTH - Happy Song.wav
          </p>
          <div className="flex justify-between font-['DM_Sans'] font-normal text-[14px] leading-[100%] tracking-[0em] gap-3 text-[#3276E8]">
            <p>40% Uploading</p>
            <span>·</span>
            <span className="">8.77 MB</span>
          </div>
        </div>
        <ProgressUpload />
        <IoMdClose />
      </div>
    </div>
  );
};
export default UploadCard;
