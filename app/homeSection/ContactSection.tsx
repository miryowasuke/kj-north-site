"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative py-16 bg-white text-warmWood overflow-hidden">
      {/* 🔹 背景画像（スクロール時に動かす） */}
      <motion.div
        style={{ backgroundImage: "url('/photo/photo10.jpg')" }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* 左側：テキストコンテンツ */}
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
              src="/photo/photo10.jpg"
              alt="お問い合わせ"
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
              src="/photo/photo11.jpg"
              alt="オフィス風景"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
        {/* 右側：背景画像（2枚配置） */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* 🔹 アニメーション付きタイトル */}
          <h2 className="text-warmWood text-5xl font-bold mb-6 relative inline-block">
            Contact
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-[4px] bg-warmWood origin-left"
            />
          </h2>

          <p className="text-warmWood mb-6 text-lg leading-relaxed">
            お問い合わせはこちらからどうぞ。お気軽にご連絡ください。
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-warmWood text-white px-6 py-3 rounded shadow-md transition-all duration-300"
            >
              お問い合わせフォーム
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
