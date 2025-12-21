"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";
import Modal from "@/components/ui/modal";
import { ProgressUpload } from "./ProgressUpload";
import { IoMdClose } from "react-icons/io";


const UploadCard = ({ onFilesChange }: { onFilesChange: (files: File[]) => void }) => {
  const [files, setFiles] = useState<File[] | undefined>();
  const [open, setOpen] = useState(false);
  const handleDrop = (newFiles: File[]) => {
    setFiles(newFiles);
    onFilesChange(newFiles); // ⬅️ kirim ke parent
  };
  return (
    <div
      className="
        bg-white
        w-full
        max-w-xl
        min-h-[280px]
        px-6
        py-6
        sm:px-8
        sm:py-7
        flex
        flex-col
        gap-6
        rounded-2xl
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
      "
    >
      <h1 className="font-['arial'] font-semibold text-[16px] text-blue-500">
        Upload File Music
      </h1>

      <Dropzone
        maxFiles={3}
        onDrop={handleDrop}
        onError={console.error}
        src={files} onDragEnter={undefined} onDragLeave={undefined} onDragOver={undefined} multiple={undefined}      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
          <p className="text-sm text-gray-400 font-medium">Or</p>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Button */}
      <button
        type="button"
        className="
          w-full
          py-3
          rounded
          border
          bg-blue-500
          text-white
          font-medium
          text-sm
          flex
          items-center
          justify-center
          hover:bg-blue-600
          transition
          font-['arial']
          tracking-wider
        "
        onClick={() => setOpen(true)}
      >
        Gunakan Tautan URL
      </button> 
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Tambahkan File Melalui URL"
      >
        <input
          type="text"
          placeholder="Masukkan URL"
          className="w-full rounded border border-gray-300 px-4 py-3 text-sm
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                outline-none"
        />


        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Kirim
          </button>
        </div>
      </Modal>
    </div>
    
  );
};
export default UploadCard;
