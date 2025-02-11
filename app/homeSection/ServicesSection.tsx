"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  // スクロール情報を取得
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 背景画像のX軸移動を制御（右→左にスライド）
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* 背景画像（スクロールでスライド） */}
      <motion.div
        className="absolute inset-0 w-[300%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/photo/photo20.jpg')`, // 画像を適用
          x: backgroundX,
          top: "-700px",
        }}
      />
      {/* メインコンテンツ */}
      <div className="relative container mx-auto px-4 text-ivoryWhite underline">
        <h2 className="text-5xl font-bold mb-8 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HP制作 */}
          <motion.div
            className="bg-darkNavy bg-opacity-90 p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-40 overflow-hidden rounded-lg">
              <Image
                src="/photo/photo3.jpg"
                alt="HP制作"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-3xl font-bold mt-6 mb-4 text-white">HP制作</h3>
            <p className="text-white">
              魅力的なデザインと高品質な技術を提供します。
            </p>
          </motion.div>

          {/* LINE構築 */}
          <motion.div
            className="bg-darkNavy bg-opacity-90 p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-40 overflow-hidden rounded-lg">
              <Image
                src="/photo/photo23.jpg"
                alt="LINE構築"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-3xl font-bold mt-6 mb-4 text-white">
              LINE構築
            </h3>
            <p className="text-white">
              SNSを活用した効率的なコミュニケーションをサポートします。
            </p>
          </motion.div>

          {/* 動画制作 */}
          <motion.div
            className="bg-darkNavy bg-opacity-90 p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-40 overflow-hidden rounded-lg">
              <Image
                src="/photo/photo5.jpg"
                alt="動画制作"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-3xl font-bold mt-6 mb-4 text-white">
              動画制作
            </h3>
            <p className="text-white">
              顧客のニーズに応じたプロモーション映像を制作します。
            </p>
          </motion.div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/services">
            <button className="bg-warmWood text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
