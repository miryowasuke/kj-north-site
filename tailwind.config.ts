/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: "#1E3D58", // ダークネイビー
        warmWood: "#A67C52", // ウォームウッド
        stoneGray: "#A49A8F", // ストーングレー
        ivoryWhite: "#F5F5F5", // アイボリーホワイト
      },
    },
  },
  plugins: [],
};
