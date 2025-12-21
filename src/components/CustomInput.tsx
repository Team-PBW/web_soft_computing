"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CustomInput = ({ type, placeholder, isHidden }: { type: string; placeholder: string; isHidden?: boolean }) => {
  if (isHidden) return null;

  return (
    <div className="group relative w-full">
      {/* glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 blur transition-opacity duration-300 group-focus-within:opacity-100" />

      <Input
        type={type}
        placeholder={placeholder}
        className="
          relative
          h-12
          rounded-xl
          border border-gray-200
          bg-white/80
          px-4
          text-sm
          text-gray-900
          placeholder:text-gray-400
          shadow-sm
          backdrop-blur-md
          transition-all duration-300
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-500/20
        "
      />
    </div>
  );
};

export default CustomInput;
