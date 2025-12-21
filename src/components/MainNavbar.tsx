"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import musifikasiLogoIcon from "@/app/styles/musifikasi_logo.svg";
import Modal from "./ui/modal";
import { useState } from "react";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("login");
  return (
    // <div className="flex justify-between px-4 py-4 items-center">
    //   <div className="logo text-[#3563E9] font-['Plus_Jakarta_Sans'] font-bold text-[32px] leading-[150%] tracking-[-0.03em] align-middle flex items-center gap-3">
    //     <Image
    //       className="object-contain w-12 h-12"
    //       src={musifikasiLogoIcon}
    //       alt="musifikasi_logo"
    //     ></Image>
    //     <h1>Musifikasi</h1>
    //   </div>
    //   <Navbar />
    //   <Button className="bg-[#3563E9] text-white font-semibold text-[14px] px-7">
    //     Get Started
    //   </Button>
    // </div>
    <nav className="w-full bg-white rounded-xl">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between min-h-[64px]">

          {/* LEFT: Logo + Menu */}
          <div className="flex items-center gap-14">
            
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                className="object-contain w-11 h-11"
                src={musifikasiLogoIcon}
                alt="musifikasi_logo"
              />
              <span className="text-blue-700 font-semibold tracking-wide text-lg">
                MUSIFIKASI
              </span>
            </div>

            {/* Menu */}
            <ul className="flex items-center gap-10 text-base font-medium">
              <li className="relative text-gray-900 cursor-pointer">
                Dashboard
                <span className="absolute left-0 -bottom-4 w-full h-[3px] bg-indigo-600 rounded-full" />
              </li>
              <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                About
              </li>
              <li className="text-gray-500 hover:text-gray-900 cursor-pointer">
                History
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <button 
              className="flex items-center gap-2 px-7 py-3 rounded border border-blue-600 text-blue-600 text-base font-medium transition"
              onClick={() => {
                setOpen(true);
                setModalType("login");
              }}
            >
              Sign in
            </button>
                <button 
              className="flex items-center gap-2 px-7 py-3 rounded bg-blue-600 text-white text-base font-medium hover:bg-indigo-700 transition"
              onClick={() => {
                setOpen(true);
                setModalType("register");
              }}
            >
              Get Started
            </button>
          </div>
            <Modal
              isOpen={open}
              onClose={() => 
                setOpen(false)
              }
              title={modalType === "login" ? "Login" : "Register"}
            >
            {modalType === "login" ? (
            <div className="w-full h-64 py-6">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                            outline-none"
                />
              </div>

              <div className="mb-2 relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                            outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                  👁️‍🗨️
                </span>
              </div>

             <div className="flex justify-end">
              <button
                  className="rounded-lg bg-blue-600 px-6 py-3 my-3
                  text-sm font-semibold text-white
                  hover:bg-blue-700 transition w-2xs "
              >
                Login
              </button>
            </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Register now
                </a>
              </p>
            </div>
            ) : (
            <div className="w-full h-84 py-6">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                            outline-none"
                />
              </div>

              <div className="mb-2 relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                            outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                  👁️‍🗨️
                </span>
              </div>

              <div className="mb-2 relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                            outline-none pr-10"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                  👁️‍🗨️
                </span>
              </div>

              <div className="flex justify-end">
                <button
                    className="rounded-lg bg-blue-600 px-6 py-3 my-3
                    text-sm font-semibold text-white
                    hover:bg-blue-700 transition w-2xs "
                >
                  Register
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                Have a member?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login now
                </a>
              </p>
            </div>
            )}
            </Modal>
        </div>
      </div>
    </nav>


  );
};

export default MainNavbar;
