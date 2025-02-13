export default function Works() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">映像制作</h2>
          <p>プロモーションビデオや企業紹介映像を制作しました。</p>
        </div>
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">LINE アカウント運用</h2>
          <p>LINE公式アカウントの運用を支援しました。</p>
        </div>
        <div className="bg-gray-100 p-4 shadow-md rounded">
          <h2 className="text-xl font-bold mb-2">ホームページ制作</h2>
          <p>多数の企業サイトを制作し、SEO対策を実施しました。</p>
        </div>
      </div>
    </div>
  );
}
