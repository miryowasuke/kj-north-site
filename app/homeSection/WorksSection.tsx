"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const worksData = [
  {
    src: "/photo/photo1.jpg",
    link: "https://kj-north.jp/plant-gallery/2338/",
    alt: "サイトA",
  },
  {
    src: "/photo/photo2.jpg",
    link: "https://example.com/siteB",
    alt: "サイトB",
  },
  {
    src: "/photo/photo3.jpg",
    link: "https://example.com/siteC",
    alt: "サイトC",
  },
  {
    src: "/photo/photo4.jpg",
    link: "https://example.com/siteD",
    alt: "サイトD",
  },
];

// カスタム矢印ボタン
interface ArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-darkNavy text-white p-3 rounded-full shadow-lg z-20"
    onClick={onClick}
  >
    ◀
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-darkNavy text-white p-3 rounded-full shadow-lg z-20"
    onClick={onClick}
  >
    ▶
  </button>
);

export default function WorksSection() {
  const settings = {
    dots: true, // 下にインジケーターを表示
    infinite: true, // 無限スクロール
    speed: 500, // スライドの速度
    slidesToShow: 3, // 一度に表示するスライド数
    slidesToScroll: 1, // スライド時に移動する数
    arrows: true, // 矢印ボタンを有効化
    prevArrow: <CustomPrevArrow />, // カスタム矢印
    nextArrow: <CustomNextArrow />, // カスタム矢印
    draggable: true, // PCでマウスドラッグ可能にする
    swipe: true, // PCでもスワイプ可能にする
    responsive: [
      {
        breakpoint: 1024, // タブレット対応
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // スマホ対応
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white text-darkNavy">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">Works</h2>
        <p className="mb-6">制作実績</p>

        {/* スライダー */}
        <div className="relative overflow-hidden">
          <Slider {...settings}>
            {worksData.map((work, index) => (
              <div key={index} className="px-4">
                <Link
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white text-xl font-bold">{work.alt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* 詳しく見るボタン */}
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
