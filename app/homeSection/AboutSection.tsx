"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className=" w-full h-screen bg-gradient-to-b from-neutralGray to-black">
      {/* 🔹 背景をスクロールで動かす */}
      <motion.div
        style={{
          backgroundImage: "url('/photo/photo20.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
      />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center relative z-10 h-full">
        {/* 🔹 左側テキストエリア */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-6 relative inline-block">
            About
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-[4px] bg-white origin-left"
            />
          </h2>

          <h3 className="text-3xl font-semibold mb-6">
            HP×動画 問題を解決するデザイン
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。幅広い業界での経験を活かして、顧客の問題を解決することに取り組んでいます。
          </p>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-warmWood text-white px-6 py-3 rounded shadow-md transition-all duration-300"
            >
              詳しく見る
            </motion.button>
          </Link>
        </motion.div>

        {/* 🔹 右側：2枚の画像を表示 */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          {/* 1枚目（大きい画像） */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-[65%] h-[70%] rounded-lg shadow-lg overflow-hidden border-ivoryWhite border-[4px] rotate-[-3deg]"
          >
            <Image
              src="/photo/photo6.jpg"
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
              src="/photo/photo7.jpg"
              alt="オフィスデザイン"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
