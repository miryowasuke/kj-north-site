// /app/news/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { newsData } from "../data";
import Link from "next/link";
import Image from "next/image";

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return <p className="text-center text-red-500">記事が見つかりません。</p>;
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-3">
      {/* 🔹 背景画像を追加 & オーバーレイ */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${news.image}')`, // 🔹 記事ごとの画像を設定
        }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* 🔹 記事コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-3xl">
        {/* タイトル */}
        <h1 className="text-3xl font-bold text-warmWood mb-4">{news.title}</h1>

        {/* 日付 & カテゴリ */}
        <p className="text-sm text-gray-300 mb-6">
          {news.date} | {news.category}
        </p>

        {/* 記事内容 */}
        <div className="text-lg leading-relaxed bg-black/20 p-6 rounded-md shadow-md">
          {news.content}
        </div>

        {/* 画像 */}
        <div className="w-full mb-6 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={news.image}
            alt={news.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* 🔙 ニュース一覧に戻るボタン */}
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-block px-6 py-3 bg-warmWood text-white font-semibold rounded-md shadow-md hover:bg-opacity-80 transition"
          >
            ← ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
