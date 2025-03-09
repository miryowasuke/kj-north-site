"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative py-16 text-warmWood overflow-hidden rounded-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div />
        {/* 右側：背景画像（2枚配置） */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* 🔹 アニメーション付きタイトル */}
          <h2 className="text-white text-5xl font-bold mb-6 relative inline-block">
            Contact
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full h-[4px] bg-white origin-left"
            />
          </h2>

          <p className="text-white mb-6 text-lg leading-relaxed">
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
