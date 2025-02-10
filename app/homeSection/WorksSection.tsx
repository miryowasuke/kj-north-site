import React from "react";
import Link from "next/link";

export default function WorksSection() {
  return (
    <section className="py-16 bg-white text-darkNavy">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">Works</h2>
        <p>高品質な製品と信頼で業界をリードします。</p>
        <div className="mt-6">
          <Link href="/works">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
