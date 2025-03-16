"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web制作",
    subtitle: "魅力的なデザインと高品質な技術を提供します",
    description:
      "企業のブランドイメージに合わせた洗練されたデザインと、SEO対策を施した高品質なWebサイトを構築。最新の技術を活用し、ユーザビリティとパフォーマンスを両立させます。",
  },
  {
    id: "02",
    title: "映像制作",
    subtitle: "顧客のニーズに応じたプロモーション映像を制作します",
    description:
      "企業の魅力を最大限に伝えるプロモーション映像を企画・撮影・編集まで一貫対応。SNS・広告・イベント向けに最適化し、ターゲットに響く映像を提供します。",
  },
  {
    id: "03",
    title: "LINE公式アカウント構築",
    subtitle: "SNSを活用した効率的なコミュニケーションをサポートします",
    description:
      "LINE公式アカウントを活用し、集客・販売促進をサポート。自動応答やシナリオ配信を活用し、顧客との関係性を強化。運用の最適化を支援します。",
  },
];

export default function Service() {
  return (
    <div className="bg-white py-20 px-4 md:px-16 lg:px-32 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-center mb-12"
        >
          Service
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 h-[5px] bg-warmWood w-20 mx-auto origin-left"
          />
        </motion.h2>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12"
            >
              <div className="text-5xl md:text-7xl font-bold text-gray-300 min-w-[100px]">
                {service.id}
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {service.title}
                </h4>
                <h5 className="text-lg md:text-xl font-medium text-gray-700 mt-2 mb-4">
                  {service.subtitle}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
