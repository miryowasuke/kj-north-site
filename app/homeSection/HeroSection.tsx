"use client";
import React from "react";
import { motion } from "framer-motion";
import VideoBackground from "../components/VideoBackGround";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 背景動画 */}
      <VideoBackground />

      {/* HEROテキストコンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-6xl font-bold uppercase tracking-wide mb-4 text-white drop-shadow-lg">
          伝わるデザインを提案
        </h1>
        <p className="text-2xl font-light text-ivoryWhite  p-2 rounded-lg">
          Design That Conveys
        </p>
      </motion.div>

      {/* スクロールダウンアニメーション */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 z-10 text-ivoryWhite text-lg flex flex-col items-center"
      >
        <span className="mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
