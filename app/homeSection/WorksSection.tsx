"use client";

import React from "react";
import { motion } from "framer-motion";
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative py-16 bg-white text-darkNavy overflow-hidden">
      {/* 🔹 背景画像（スクロール時に動くエフェクト） */}
      <motion.div
        style={{ backgroundImage: "url('/photo/photo20.jpg')" }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* 🔹 タイトルにラインアニメーション */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-8 relative inline-block"
        >
          Works
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-[4px] bg-darkNavy origin-left"
          />
        </motion.h2>

        <p className="mb-6">制作実績</p>

        {/* 🔹 スライダー */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
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
        </motion.div>

        {/* 🔹 詳しく見るボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link href="/works">
            <button className="bg-darkNavy text-white px-6 py-3 rounded hover:bg-opacity-80">
              詳しく見る
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
