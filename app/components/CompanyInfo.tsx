"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  return (
    <section className="pt-20 text-darkNavy">
      {/* 🔹 メインコンテンツ */}
      <div className="container mx-auto relative z-10">
        {/* 🔹 タイトル */}
        <h2 className="text-5xl md:text-5xl font-bold mb-8 text-darkNavy">
          会社概要
        </h2>

        {/* 🔹 会社情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-lg p-8 border border-gray-300"
        >
          <table className="w-full text-lg text-darkNavy">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-3 font-bold w-48 md:w-56 text-left">
                  会社名
                </td>
                <td className="py-3 text-left">株式会社KJ NORTH</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 font-bold w-48 md:w-56 text-left">
                  所在地
                </td>
                <td className="py-3 text-left">
                  〒063-0811
                  <br />
                  札幌市西区琴似1条2丁目6-8-804
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 font-bold w-48 md:w-56 text-left">TEL</td>
                <td className="py-3 text-left">011-795-2051</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 font-bold w-48 md:w-56 text-left">
                  営業時間
                </td>
                <td className="py-3 text-left">10:00～18:00</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 font-bold w-48 md:w-56 text-left">
                  定休日
                </td>
                <td className="py-3 text-left">土日祝</td>
              </tr>
              <tr>
                <td className="py-3 font-bold w-48 md:w-56 text-left">
                  駐車場
                </td>
                <td className="py-3 text-left">
                  ありません。お近くのコインパーキングをご利用ください。
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
