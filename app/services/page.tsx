export default function Services() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">サービス</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">映像制作</h2>
          <p>魅力的な映像を通じて、ブランド価値を向上します。</p>
        </div>
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">LINEアカウント運用</h2>
          <p>LINE公式アカウントの導入から運用までをトータルサポート。</p>
        </div>
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">ホームページ制作</h2>
          <p>最新の技術を活用した高品質なサイトを制作します。</p>
        </div>
      </div>
    </div>
  );
}
