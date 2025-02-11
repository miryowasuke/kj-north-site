import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white text-darkNavy">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 左側：テキストコンテンツ */}
        <div className="text-center md:text-left">
          <h2 className="text-darkNavy text-5xl font-bold mb-6">Contact</h2>
          <p className="text-darkNavy mb-6 text-lg leading-relaxed">
            お問い合わせはこちらからどうぞ。お気軽にご連絡ください。
          </p>
          <Link href="/contact">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80 transition">
              お問い合わせフォーム
            </button>
          </Link>
        </div>

        {/* 右側：背景画像 */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/photo/photo10.jpg"
            alt="お問い合わせ"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
          {/* 🔹 オーバーレイ（薄暗いエフェクト） */}
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
