"use client";

import Link from "next/link";
import { newsData } from "./data";

const News = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20" // 🔹 ヘッダー分の余白を追加
      style={{
        backgroundImage: "url('/photo/photo21.jpg')",
      }}
    >
      {/* ✨ 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="relative container mx-auto px-4">
        {/* 🔹 Newsタイトルを中央に配置 & 白色に設定 */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-ivoryWhite ">
          News
        </h1>
        <ul className="space-y-6">
          {newsData.map((news) => (
            <li
              key={news.id}
              className="border-b border-gray-600 p-4 bg-black/40 rounded-md shadow-lg"
            >
              {/* 🔹 タイトルと日付の位置を統一 */}
              <Link
                href={`/news/${news.id}`}
                className="block text-lg font-semibold text-ivoryWhite hover:underline"
              >
                {news.title}
              </Link>
              <p className="text-sm text-gray-300">
                {news.date} | {news.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
