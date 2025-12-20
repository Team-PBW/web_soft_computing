"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import musifikasiLogoIcon from "@/app/styles/musifikasi_logo.svg";

const MainNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
            <Image
              src={musifikasiLogoIcon}
              alt="Musifikasi Logo"
              className="h-7 w-7 object-contain"
            />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Musifikasi
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* CTA */}
        <Button
          className="
            rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            px-6 py-2 text-sm font-semibold text-white
            shadow-lg shadow-blue-600/30
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-xl
          "
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default MainNavbar;
