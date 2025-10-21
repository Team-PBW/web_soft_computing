"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import musifikasiLogoIcon from "@/app/styles/musifikasi_logo.svg";

const MainNavbar = () => {
  return (
    <div className="flex justify-between px-4 py-4 items-center">
      <div className="logo text-[#3563E9] font-['Plus_Jakarta_Sans'] font-bold text-[32px] leading-[150%] tracking-[-0.03em] align-middle flex items-center gap-3">
        <Image
          className="object-contain w-12 h-12"
          src={musifikasiLogoIcon}
          alt="musifikasi_logo"
        ></Image>
        <h1>Musifikasi</h1>
      </div>
      <Navbar />
      <Button className="bg-[#3563E9] text-white font-semibold text-[14px] px-7">
        Get Started
      </Button>
    </div>
  );
};

export default MainNavbar;
