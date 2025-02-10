/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: "#1E3D58", // ダークネイビー
        warmWood: "#8B5E3C", // ウォームウッド（アクセント）
        stoneGray: "#A49A8F", // ストーングレー
        ivoryWhite: "#F5F5F5", // アイボリーホワイト
      },
    },
  },
  plugins: [],
};
