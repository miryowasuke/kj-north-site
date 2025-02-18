"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-40 min-h-screen bg-gradient-to-b from-ivoryWhite to-gray-100 text-darkNavy overflow-hidden">
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
            className="max-w-4xl mx-auto text-center md:text-left"
          >
            <h3 className="text-4xl font-semibold mb-5 leading-snug">
              <span className="text-darkNavy">過度じゃない、</span>
              <br />
              <span className="text-warmWood">ちょうどよいデザイン</span>
            </h3>

            <p className="text-xl leading-loose text-darkNavy">
              私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。
              幅広い業界での経験を活かして、顧客の問題を解決することに取り組んでいます。
              <br />
              創立以来、多くの企業と協力して実績を築いてきました。
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
        <div className="container mx-auto px-4 mt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-lg p-8 border-l-4 border-warmWood"
          >
            <h2 className="text-4xl font-bold mb-4 text-darkNavy">会社概要</h2>
            <p className="text-lg text-darkNavy">
              <strong>会社名:</strong> 株式会社KJ NORTH
              <br />
              <strong>所在地:</strong> 〒063-0811 札幌市西区琴似1条2丁目6-8-804
              <br />
              <strong>TEL:</strong> 011-795-2051
              <br />
              <strong>営業時間:</strong> 10:00～18:00
              <br />
              <strong>定休日:</strong> 土日祝
              <br />
              <strong>駐車場:</strong>{" "}
              ありません。お近くのコインパーキングをご利用ください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
