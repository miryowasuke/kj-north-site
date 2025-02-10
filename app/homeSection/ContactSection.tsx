import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 text-darkNavy">Contact</h2>
        <p className="mb-8 text-darkNavy">
          お問い合わせはこちらからどうぞ。お気軽にご連絡ください。
        </p>
        <Link href="/contact">
          <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
            お問い合わせフォーム
          </button>
        </Link>
      </div>
    </section>
  );
}
