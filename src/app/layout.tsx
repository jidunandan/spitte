import type { Metadata } from "next";
import { Roboto, Jersey_15, Jersey_10, Electrolize } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const jersey15 = Jersey_15({
  weight: "400",
  subsets: ["latin"],
});
const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});
const electrolize = Electrolize({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Splitte",
  description: "Split your expenses!", //where is this used
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jersey15.className} ${jersey10.className} ${roboto.className} ${electrolize.className} `}
      >
        {children}
      </body>
    </html>
  );
}
