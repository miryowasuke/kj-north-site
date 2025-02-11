"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoBackground from "../components/VideoBackGround";

export default function HeroSection() {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    // 0.5秒後にアニメーション開始
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 🎥 背景動画 */}
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <VideoBackground />
      </motion.div>

      {/* 初期状態: 黒背景（スライドしながらフェードアウト） */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 bg-black z-50"
      />

      {/* HEROテキストコンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, y: 0, scale: 1, letterSpacing: "0.02em" }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-6xl font-bold uppercase tracking-wide mb-4 text-white drop-shadow-lg">
          伝わるデザインを提案
        </h1>
        <p className="text-2xl font-light text-ivoryWhite p-2 rounded-lg">
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
