"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = ["Web制作", "映像制作", "LINE構築"];

const webWorks = [
  {
    id: 1,
    title: "会社A",
    thumbnail: "/photo/photo1.jpg",
    url: "https://company-a.com",
  },
  {
    id: 2,
    title: "会社B",
    thumbnail: "/photo/photo2.jpg",
    url: "https://company-b.com",
  },
  {
    id: 3,
    title: "会社C",
    thumbnail: "/photo/photo3.jpg",
    url: "https://company-c.com",
  },
];

const lineWorks = [
  {
    id: 1,
    title: "LINE公式 - 会社X",
    thumbnail: "/photo/photo4.jpg",
    url: "https://company-x-line.com",
  },
  {
    id: 2,
    title: "LINE公式 - 会社Y",
    thumbnail: "/photo/photo5.jpg",
    url: "https://company-y-line.com",
  },
];

const videoWorks = [
  {
    id: 1,
    title: "プロモーション映像 - 田中株式会社",
    videoUrl: "https://www.youtube.com/embed/9PdZbZL78gc?si=cTP81vfJK2ZS35Sj",
  },
  {
    id: 2,
    title: "プロモーション映像 - 会社XYZ",
    videoUrl: "https://www.youtube.com/embed/8KueNZaxC78?si=hrLnIdwsDQPA-0aI",
  },
  {
    id: 3,
    title: "プロモーション映像 - 株式会社ワークス",
    videoUrl: "https://www.youtube.com/embed/o9Ssorhig58?si=GML7AOStrybeApsB",
  },
];

export default function WorksPage() {
  const [selectedTab, setSelectedTab] = useState("Web制作");
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="bg-white py-20 px-4 md:px-16 lg:px-32 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* タイトル */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-center mb-12"
        >
          Works
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 h-[5px] bg-warmWood w-20 mx-auto origin-left"
          />
        </motion.h2>

        {/* タブ切り替え */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedTab(category)}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedTab === category
                  ? "bg-warmWood text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Web制作 & LINE公式アカウント構築 */}
        {selectedTab === "Web制作" || selectedTab === "LINE構築" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {(selectedTab === "Web制作" ? webWorks : lineWorks).map((work) => (
              <div
                key={work.id}
                onClick={() => router.push(work.url)}
                className="cursor-pointer"
              >
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h4 className="text-lg font-semibold mt-4 text-center">
                    {work.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* 映像制作 */}
        {selectedTab === "映像制作" && (
          <div className="space-y-4">
            {videoWorks.map((work) => (
              <div key={work.id} className="border p-4 rounded-lg">
                <button
                  className="w-full text-left text-xl font-semibold"
                  onClick={() =>
                    setExpandedVideo(expandedVideo === work.id ? null : work.id)
                  }
                >
                  {work.title}
                </button>
                {expandedVideo === work.id && (
                  <div className="mt-4 relative w-full max-w-4xl mx-auto">
                    {/* YouTube埋め込み動画 */}
                    <iframe
                      width="100%"
                      height="500px"
                      src={work.videoUrl}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg mt-4"
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
