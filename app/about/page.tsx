"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-32 min-h-screen  bg-ivoryWhite text-warmWood overflow-hidden">
      {/* 🔹 背景イメージ（半透明） */}
      <motion.div
        style={{ backgroundImage: "url('/photo/photo7.jpg')" }}
        className="absolute inset-0 bg-cover bg-center opacity-30"
      />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* 🔹 左側テキストエリア */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* 🔹 タイトル */}
          <h2 className="text-5xl font-bold mb-6 relative inline-block text-darkNavy">
            Message
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-[4px] bg-warmWood origin-left"
            />
          </h2>

          <h3 className="text-3xl font-semibold mb-6 text-darkNavy">
            過度じゃない、ちょうどよいデザイン
          </h3>

          <p className="text-lg leading-relaxed mb-6 text-darkNavy">
            私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。
            幅広い業界での経験を活かして、顧客の問題を解決することに取り組んでいます。
            創立以来、多くの企業と協力して実績を築いてきました。
            私たちの目標は、静かな情熱で未来を築き、お客様のビジネスの成功を支援することです。
          </p>
        </motion.div>

        {/* 🔹 右側：オフィスイメージ */}
        <div className="relative w-full h-[450px]">
          {/* 1枚目（大きい画像） */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-[65%] h-[70%] rounded-lg shadow-lg overflow-hidden border-ivoryWhite border-[4px] rotate-[-3deg]"
          >
            <Image
              src="/photo/photo19.jpg"
              alt="事務所の雰囲気"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>

          {/* 2枚目（小さい画像） */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-lg shadow-lg overflow-hidden border-ivoryWhite border-[4px] rotate-[3deg]"
          >
            <Image
              src="/photo/photo5.jpg"
              alt="オフィスデザイン"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
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
    </section>
  );
}
