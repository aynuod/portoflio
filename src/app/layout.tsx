import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "GOURJA DOUNYA | Software Engineer",
  metadataBase: new URL("https://www.erichuang.art"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "dounya gourja", url: "https://github.com/aynuod" },

  ],
  description: "dounya gourja's personal portfolio website",
  openGraph: {
    title: "GOURJA DOUNYA | Software Engineer",
    description: "dounya gourja's personal portfolio website",
    images: [
      {
        url: "/photoo.jpeg",
        alt: "Eric Huang's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
