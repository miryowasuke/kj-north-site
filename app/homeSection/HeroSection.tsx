import React from "react";
import VideoBackground from "../components/VideoBackGround";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center transition-opacity duration-1000 opacity-0 animate-fadeIn">
        <h1 className="text-5xl font-bold uppercase tracking-wide mb-4 text-white">
          伝わるデザインを提案
        </h1>
        <p className="text-3xl font-light text-ivoryWhite">
          Design That Conveys
        </p>
      </div>
    </section>
  );
}
