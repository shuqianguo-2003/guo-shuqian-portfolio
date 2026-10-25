import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guo-shuqian-marketing.sguo0060.chatgpt.site"),
  title: "郭树骞｜品牌传播求职展示页",
  description: "郭树骞的品牌传播求职展示页，包含蒙纳士大学教育背景、实践经历、国际市场项目与 COMMON GROUND 互动空间设计。",
  openGraph: { title: "郭树骞｜品牌传播与国际市场", description: "品牌传播、社媒内容、英文市场研究与品牌本地化。", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "郭树骞 品牌传播与国际市场" }] },
  twitter: { card: "summary_large_image", title: "郭树骞｜品牌传播与国际市场", description: "品牌传播、社媒内容、英文市场研究与品牌本地化。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
