import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexgen Leaders - Your Source for Startup and Pharma News",
  description:
    "Stay updated with the latest news and insights on startups and the pharmaceutical industry. Nexgen Leaders brings you in-depth articles, trends, and analysis.",
  keywords:
    "startups, pharma news, pharmaceutical industry, startup news, business news, innovation, biotech, healthcare, entrepreneur news",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@NextgenLeaders", // Replace with your Twitter handle if available
    title: "Nexgen Leaders - Your Source for Startup and Pharma News",
    description:
      "Stay updated with the latest news and insights on startups and the pharmaceutical industry. Nexgen Leaders brings you in-depth articles, trends, and analysis.",
    images: "https://www.nextgenleaders.vip/path-to-your-image.jpg", // Replace with actual path to an image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />

        <div className="w-full py-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
