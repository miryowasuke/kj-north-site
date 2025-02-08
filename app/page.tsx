import VideoBackground from "./components/VideoBackGround";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center transition-opacity duration-1000 opacity-0 animate-fadeIn">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">
            伝わるデザインを提案
          </h1>
          <p className="text-3xl font-light">Design That Conveys</p>
        </div>
      </section>

      {/* about */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8">About</h2>
          <h3 className="text-4xl font-bold mb-8">
            HP×動画 問題を解決する デザイン
          </h3>
          <p className="text-lg leading-relaxed">
            私たちは、顧客の要求に応じて優れたウェブサイト制作と動画制作を提供しています。幅広い業界での経験を活かして、顧客の問題を解決することに取り組んでいます。創立以来、多くの企業と協力して実績を築いてきました。私たちの目標は、静かな情熱で未来を築き、お客様のビジネスの成功を支援することです。
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-5xl font-bold mb-8 text-right">
            Services
          </h2>
          <h3 className="text-black text-1xl font-bold mb-8">
            当社は、ウェブサイト制作と動画制作の専門家です。ウェブサイト制作では、美しさ、使いやすさ、SEO対策を考慮したデザインを提供します。動画制作においては、企業のイメージを向上させるプロモーション映像を制作し、SNSやウェブサイトでの展開をサポートします。どちらのサービスも、お客様の目標達成に努め、最適な解決策を提案いたします。
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 shadow-lg rounded text-center">
              <h3 className="text-2xl font-bold mb-4">HP制作</h3>
              <p>魅力的なデザインと高品質な技術を提供します。</p>
            </div>
            <div className="bg-gray-700 p-6 shadow-lg rounded text-center">
              <h3 className="text-2xl font-bold mb-4">LINE構築</h3>
              <p>SNSを活用した効率的なコミュニケーションをサポートします。</p>
            </div>
            <div className="bg-gray-700 p-6 shadow-lg rounded text-center">
              <h3 className="text-2xl font-bold mb-4">動画制作</h3>
              <p>顧客のニーズに応じたプロモーション映像を制作します。</p>
            </div>
          </div>
        </div>
      </section>
      {/* 実績 */}
      <section className="py-16 bg-gray-700 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">実績</h2>
          <p className="text-center mb-6">
            高品質な製品と信頼で業界をリードします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">実績</h3>
              <p>世界中で高く評価される実績を築いています。</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">主要取引先一覧</h3>
              <p>国内外の大手企業と長期的な取引関係を構築。</p>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center">News</h2>
          <ul className="space-y-4">
            <li>
              <span className="block text-sm text-gray-400">2025.01.22</span>
              <span className="block text-lg font-semibold">
                冬祭りのご案内
              </span>
            </li>
            <li>
              <span className="block text-sm text-gray-400">2024.12.27</span>
              <span className="block text-lg font-semibold">
                冬季休業のご案内
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Contact</h2>
          <p className="mb-8">
            お問い合わせはこちらからどうぞ。お気軽にご連絡ください。
          </p>
          <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
            お問い合わせフォーム
          </button>
        </div>
      </section>
    </div>
  );
}
