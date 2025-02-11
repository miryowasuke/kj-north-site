import "./globals.css"; // グローバルスタイルを読み込み
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* header */}
        <Header />
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
