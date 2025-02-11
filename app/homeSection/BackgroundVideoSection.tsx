"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "../components/VideoBackGround"; // Heroの動画と共通化

export default function BackgroundVideoSection() {
  // スクロール値を取得
  const { scrollYProgress } = useScroll();

  // 動画がゆっくりスクロールについてくるような動き
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]); // スクロール時に縮小
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]); // 徐々にフェード

  return (
    <motion.section
      style={{ scale, opacity }}
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden"
    >
      <VideoBackground />
    </motion.section>
  );
}
