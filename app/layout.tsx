import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSA - for your best memories",
  description: "Made by MoyStasik",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
