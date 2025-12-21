import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = React.ComponentProps<"input"> & {
  isHidden?: boolean;
};

function Input({ className, type, isHidden, ...props }: InputProps) {
  const [show, setShow] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className="group relative w-full">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 blur transition-opacity duration-300 group-focus-within:opacity-100" />

      <input
        type={isPassword && show ? "text" : type}
        data-slot="input"
        className={cn(
          "relative h-12 w-full rounded-xl border border-gray-200 bg-white/80 px-4 pr-11 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm backdrop-blur-md transition-all duration-300 outline-none",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />

      {isPassword && (
        <Button type="button" variant="ghost" onClick={() => setShow(!show)} className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700">
          {show ? <FaEye /> : <FaEyeSlash />}
        </Button>
      )}
    </div>
  );
}

export { Input };
