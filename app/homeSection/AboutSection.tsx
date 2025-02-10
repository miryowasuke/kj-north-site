import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white text-darkNavy">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8">About</h2>
        <h3 className="text-4xl font-bold mb-8 text-darkNavy">
          HP×動画 問題を解決する デザイン
        </h3>
        <p className="text-lg leading-relaxed text-darkNavy">
          私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。幅広い業界での経験を活かして、顧客の問題を解決することに取り組んでいます。
        </p>
        <div className="mt-6">
          <Link href="/about">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
