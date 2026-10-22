import type { Metadata } from "next";
import "./globals.css";

const PRETENDARD_CDN =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export const metadata: Metadata = {
  title: "초대장 만들기",
  description: "입력한 내용으로 모임 초대장을 만들어요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={PRETENDARD_CDN} crossOrigin="anonymous" />
        {/* TEMP: Figma 캡처용 — 캡처 후 제거 */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-mobile flex-1">{children}</div>
      </body>
    </html>
  );
}
