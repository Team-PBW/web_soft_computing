import MainNavbar from "@/components/MainNavbar";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <MainNavbar />

      <div className="max-w-6xl flex justify-center items-center px-6 py-12 gap-8 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Lorem Ipsum</h1>
          <p className="mb-6 text-gray-600">
            Create expressive, professional-quality voiceovers with Eleven v3
            (Alpha) and ElevenLabs Multilingual v2 — from emotionally rich voice
            acting to natural, production-ready narration for videos, ads,
            stories, and multilingual content at any scale.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Get Started
          </button>
        </div>
        <img
          src="https://ai-seo.imgix.net/media/elevenlabs-mobile-Hero-image.jpg?auto=format%2Ccompress&s=afcc1f33ebb07a22caa7ff15c3b5c3e0"
          alt=""
          className="w-96 rounded-xl"
        />
      </div>
    </section>
  );
}
