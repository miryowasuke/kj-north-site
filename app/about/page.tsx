"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CompanyInfo from "../components/CompanyInfo";
import GoogleMap from "../components/GoogleMap";
import ContactSection from "../homeSection/ContactSection";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20" // 🔹 ヘッダー分の余白を追加
      style={{
        backgroundImage: "url('/photo/photo23.jpg')",
      }}
    >
      {/* ✨ 背景オーバーレイ */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
      {/* 🔹 メインコンテンツ */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10">
        {/* 🔹 タイトル */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-center mb-12"
        >
          About
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 h-[5px] bg-warmWood w-20 mx-auto origin-left"
          />
        </motion.h2>

        {/* 🔹 テキスト + 画像エリア */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* 🔹 左側: テキスト */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-left"
          >
            <h3 className="text-4xl font-semibold mb-5 leading-snug">
              <span className="text-darkNavy">過度じゃない</span>
              <br />
              <span className="text-warmWood">ちょうどよい デザイン</span>
            </h3>

            <p className="text-xl leading-loose text-darkNavy">
              私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。幅広い業界での経験を活かして、
              <br />
              顧客の問題を解決することに取り組んでいます。創立以来、多くの企業と協力して実績を築いてきました。
              <br />
              私たちの目標は、静かな情熱で未来を築き、お客様のビジネスの成功を支援することです。
            </p>
          </motion.div>

          {/* 🔹 右側: 画像 */}
          <div className="relative w-full h-[500px]">
            {/* 1枚目（大きい画像） */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-0 w-[70%] h-[75%] rounded-xl shadow-xl overflow-hidden border-white border-[4px] rotate-[-4deg]"
              >
                <Image
                  src="/photo/photo19.jpg"
                  alt="事務所の雰囲気"
                  width={600}
                  height={450}
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            )}

            {/* 2枚目（小さい画像） */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[55%] h-[65%] rounded-xl shadow-lg overflow-hidden border-white border-[4px] rotate-[3deg]"
              >
                <Image
                  src="/photo/photo5.jpg"
                  alt="オフィスデザイン"
                  width={500}
                  height={350}
                  className="rounded-xl object-cover w-full h-full"
                />
              </motion.div>
            )}
          </div>
        </div>
        {/* 🔹 会社概要セクション */}
        <CompanyInfo />
        <div className="flex flex-col md:flex-row py-10">
          {/* Google Map */}
          <div className="w-full md:w-1/2">
            <GoogleMap />
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/2 md:ml-5 mt-10 md:mt-0">
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
