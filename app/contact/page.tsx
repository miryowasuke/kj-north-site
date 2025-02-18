import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative flex flex-col flex-grow min-h-screen bg-gradient-to-b from-darkNavy to-black text-ivoryWhite px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
        Contact
      </h1>
      <p className="text-center text-sm text-ivoryWhite mb-4">
        * は必須項目になりますので必ず入力してください。
      </p>
      <form className="space-y-6 max-w-2xl w-full mx-auto">
        {/* お問い合わせの種類 */}
        <div>
          <label className="block text-lg font-medium mb-2">
            お問い合わせの種類
          </label>
          <select className="w-full bg-transparent border border-white p-2 rounded-md">
            <option>- 選択してください -</option>
            <option>HP制作</option>
            <option>LINE構築</option>
            <option>動画制作</option>
            <option>その他</option>
          </select>
        </div>

        {/* 名前 */}
        <div>
          <label className="block text-lg font-medium mb-2">お名前 *</label>
          <input
            type="text"
            placeholder="例：山田 太郎"
            className="w-full bg-transparent border border-white p-2 rounded-md"
          />
        </div>

        {/* フリガナ */}
        <div>
          <label className="block text-lg font-medium mb-2">フリガナ *</label>
          <input
            type="text"
            placeholder="例：ヤマダ タロウ"
            className="w-full bg-transparent border border-white p-2 rounded-md"
          />
        </div>

        {/* 会社名 */}
        <div>
          <label className="block text-lg font-medium mb-2">会社名</label>
          <input
            type="text"
            placeholder="例：株式会社KJ NORTH"
            className="w-full bg-transparent border border-white p-2 rounded-md"
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block text-lg font-medium mb-2">
            メールアドレス *
          </label>
          <input
            type="email"
            placeholder="例：info@kj-north.jp"
            className="w-full bg-transparent border border-white p-2 rounded-md"
          />
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block text-lg font-medium mb-2">電話番号 *</label>
          <input
            type="tel"
            placeholder="例：000-0000-0000"
            className="w-full bg-transparent border border-white p-2 rounded-md"
          />
        </div>

        {/* お問い合わせ内容 */}
        <div>
          <label className="block text-lg font-medium mb-2">
            お問い合わせ内容 *
          </label>
          <textarea
            placeholder="こちらにご記入ください。"
            rows={4}
            className="w-full bg-transparent border border-white p-2 rounded-md"
          ></textarea>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300"
        >
          送信
        </button>
      </form>
    </div>
  );
}
