import "./globals.css"; // グローバルスタイルを読み込み
import Header from "./components/Header";

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
        <footer className="bg-black py-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 KJ-NORTH. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
