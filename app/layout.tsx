import "./globals.css"; // グローバルスタイルを読み込み
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="bg-black text-gray-900">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <main className="pt-16">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
