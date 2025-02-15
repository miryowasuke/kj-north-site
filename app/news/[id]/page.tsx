// /app/news/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { newsData } from "../data";
import Link from "next/link";

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return <p className="text-center text-red-500">記事が見つかりません。</p>;
  }

  return (
    <div className="flex flex-col flex-grow min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto px-4 m-5">
        <h1 className="text-3xl font-bold text-warmWood mb-4">{news.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          {news.date} | {news.category}
        </p>
        <div className="text-lg leading-relaxed">{news.content}</div>

        {/* 🔙 一覧に戻るリンク */}
        <div className="mt-8">
          <Link href="/news" className="text-warmWood hover:underline">
            ← ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
