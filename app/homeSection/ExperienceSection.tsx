"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // スクロールの開始と終了を調整
  });

  // 各セクションのスクロールに応じたY軸の移動量（順番に表示されるように調整）
  const y1 = useTransform(scrollYProgress, [0.0, 0.2], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "-100%"]);

  return (
    <main ref={ref} className="relative h-[200vh] z-10 m-4">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 1枚目 - HP制作 */}
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
              HP制作
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              魅力的なデザインと高品質な技術を提供します。
            </p>
          </div>
        </motion.div>

        {/* 2枚目 - LINE構築 */}
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
              LINE構築
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              SNSを活用した効率的なコミュニケーションをサポートします。
            </p>
          </div>
        </motion.div>

        {/* 3枚目 - 動画制作 */}
        <motion.div className="section__inner z-30 flex flex-col justify-end absolute top-0 left-0 w-full h-screen">
          <Image
            src="/photo/photo3.jpg"
            alt="Background 3"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
          <div className="absolute bottom-12 left-8 w-[90%] md:w-[50%] bg-darkNavy/60 backdrop-blur-md p-6 rounded-lg">
            <h2 className="text-ivoryWhite text-4xl font-semibold tracking-wide">
              動画制作
            </h2>
            <p className="text-ivoryWhite text-sm mt-2 leading-relaxed">
              顧客のニーズに応じたプロモーション映像を制作します。
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
