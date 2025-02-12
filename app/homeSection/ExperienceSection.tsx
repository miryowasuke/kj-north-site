"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // スクロールの開始と終了を調整
  });

  // 各セクションのスクロールに応じたY軸の移動量（順番に表示されるように調整）
  const y1 = useTransform(scrollYProgress, [0.0, 0.2], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "-100%"]);

  return (
    <main ref={ref} className="relative h-[200vh] z-10 m-4">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 1枚目 - 最初に表示（z-50: 一番上） */}
        <motion.div
          className="section__inner z-50 flex items-center justify-center absolute top-0 left-0 w-full h-screen rounded-lg shadow-2xl shadow-black/50"
          style={{ y: y1 }}
        >
          <Image
            src="/photo/photo1.jpg"
            alt="Background 1"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="rounded-lg"
          />
          <h2 className="absolute text-white text-6xl font-bold bg-black/40 px-6 py-2 rounded-lg shadow-lg shadow-white/30">
            HP制作
          </h2>
        </motion.div>

        {/* 2枚目（z-40: 1の上に重なる） */}
        <motion.div
          className="section__inner z-40 flex items-center justify-center absolute top-0 left-0 w-full h-screen rounded-lg shadow-2xl shadow-black/50"
          style={{ y: y2 }}
        >
          <Image
            src="/photo/photo2.jpg"
            alt="Background 2"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="rounded-lg"
          />
          <h2 className="absolute text-white text-6xl font-bold bg-black/40 px-6 py-2 rounded-lg shadow-lg shadow-white/30">
            動画制作
          </h2>
        </motion.div>

        {/* 3枚目（z-30: 2の上に重なる） */}
        <motion.div className="section__inner z-30 flex items-center justify-center absolute top-0 left-0 w-full h-screen rounded-lg shadow-2xl shadow-black/50">
          <Image
            src="/photo/photo3.jpg"
            alt="Background 3"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="rounded-lg"
          />
          <h2 className="absolute text-white text-6xl font-bold bg-black/40 px-6 py-2 rounded-lg shadow-lg shadow-white/30">
            LINE構築
          </h2>
        </motion.div>
      </div>
    </main>
  );
}
