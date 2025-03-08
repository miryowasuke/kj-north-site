"use client";
import React from "react";
import AboutSection from "./homeSection/AboutSection";
import WorksSection from "./homeSection/WorksSection";
import NewsSection from "./homeSection/NewsSection";
import ContactSection from "./homeSection/ContactSection";
import HeroSection from "./homeSection/HeroSection";
import BackgroundVideoSection from "./homeSection/BackgroundVideoSection";
import ExperienceSection from "./homeSection/ExperienceSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <HeroSection />

      <section className="relative z-10">
        <AboutSection />
      </section>

      {/* 背景動画用のスペース（透明エリア） */}
      <section className="relative h-[40vh] bg-transparent z-0">
        {/* 背景動画を固定 */}
        <BackgroundVideoSection />
      </section>

      <section>
        <ExperienceSection />
      </section>

      <section className="relative z-10">
        <WorksSection />
      </section>

      {/* 背景動画用のスペース（透明エリア） */}
      <section className="relative h-[40vh] bg-transparent z-0">
        {/* 背景動画を固定 */}
        <BackgroundVideoSection />
      </section>

      <section className="relative z-10">
        <NewsSection />
      </section>

      <section className="relative z-10">
        <ContactSection />
      </section>
    </main>
  );
}
