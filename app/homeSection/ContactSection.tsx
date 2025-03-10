"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="group relative container mx-auto py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
      {/* ホバー時スライド背景 */}
      <div
        className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-b from-darkNavy to-black 
                   -translate-y-full group-hover:translate-y-0 
                   transition-transform duration-500 pointer-events-none z-0"
      />

      {/* 実際のコンテンツ */}
      <div className="relative z-10 md:col-start-2 text-right md:text-left">
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
          お問い合わせはこちらからどうぞ。
        </p>
        <p className="text-white mb-6 text-lg leading-relaxed">
          お気軽にご連絡ください。
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
      </div>
    </section>
  );
}
