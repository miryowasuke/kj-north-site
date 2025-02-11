import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-warmWood text-ivoryWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-right">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HP制作 */}
          <div className="bg-stoneGray p-6 shadow-lg rounded text-center">
            <div className="relative w-full h-40">
              <Image
                src="/photo/photo3.jpg"
                alt="HP制作"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
              {/* 🔹 オーバーレイ（薄暗い黒色） */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4  text-white">HP制作</h3>
            <p className="text-white">
              魅力的なデザインと高品質な技術を提供します。
            </p>
          </div>

          {/* LINE構築 */}
          <div className="bg-stoneGray p-6 shadow-lg rounded text-center">
            <div className="relative w-full h-40">
              <Image
                src="/photo/photo23.jpg"
                alt="LINE構築"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
              {/* 🔹 オーバーレイ（薄暗い黒色） */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">LINE構築</h3>
            <p className="text-white">
              SNSを活用した効率的なコミュニケーションをサポートします。
            </p>
          </div>

          {/* 動画制作 */}
          <div className="bg-stoneGray p-6 shadow-lg rounded text-center">
            <div className="relative w-full h-40">
              <Image
                src="/photo/photo5.jpg"
                alt="動画制作"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
              {/* 🔹 オーバーレイ（薄暗い黒色） */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">動画制作</h3>
            <p className="text-white">
              顧客のニーズに応じたプロモーション映像を制作します。
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/services">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
