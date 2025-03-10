"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0.0, 0.3], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "-100%"]);

  return (
    <main ref={ref} className="relative h-[500vh] z-10 m-4">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 1枚目 - Web制作 */}
        <motion.div
          className="section__inner z-50 flex flex-col justify-end absolute top-0 left-0 w-full h-screen"
          style={{ y: y1 }}
        >
          <Image
            src="/photo/photo1.jpg"
            alt="Background 1"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className="absolute bottom-12 left-8 w-[90%] md:w-[50%] bg-darkNavy/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-ivoryWhite text-4xl font-semibold tracking-wide">
              Web制作
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              魅力的なデザインと高品質な技術を提供します。
            </p>
          </div>
        </motion.div>

        {/* 2枚目 - 映像制作 */}
        <motion.div
          className="section__inner z-40 flex flex-col justify-end absolute top-0 left-0 w-full h-screen"
          style={{ y: y2 }}
        >
          <Image
            src="/photo/photo2.jpg"
            alt="Background 2"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className="absolute bottom-12 right-8 w-[90%] md:w-[50%] bg-warmWood/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-ivoryWhite text-4xl font-semibold tracking-wide">
              映像制作
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              顧客のニーズに応じたプロモーション映像を制作します。
            </p>
          </div>
        </motion.div>

        {/* 3枚目 - LINE公式アカウント構築 */}
        <motion.div
          className="section__inner z-30 absolute top-0 left-0 w-full h-screen flex flex-col justify-end"
          style={{ y: y3 }}
        >
          <Image
            src="/photo/photo3.jpg"
            alt="Background 3"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className="absolute bottom-12 left-8 w-[90%] md:w-[50%] bg-darkNavy/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-ivoryWhite text-4xl font-semibold tracking-wide">
              LINE公式アカウント構築
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              SNSを活用した効率的なコミュニケーションをサポートします。
            </p>
          </div>
        </motion.div>

        {/* 4枚目 - サービスタイトルと詳細ボタン */}
        <motion.div className="section__inner z-20 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
          <Image
            src="/photo/photo4.jpg"
            alt="Background 4"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          {/* 背景グラデーションを追加 */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutralGray to-black opacity-70 z-10" />

          <div className="relative z-10  backdrop-blur-md p-8 rounded-lg text-center">
            <h2 className="text-ivoryWhite py-10 text-6xl font-semibold tracking-wide">
              Service
            </h2>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-warmWood text-white px-6 py-3 rounded shadow-md transition-all duration-300"
              >
                詳細を見る
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
