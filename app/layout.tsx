import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import Footer from '@/components/Footer';
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import Head from 'next/head';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Home | AllTypeBlogs",
  description: "AllTypeBlogs is an open-source nextjs blog template design with tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="ChXAkG_GyJAQBx95TtxOjzZyK1ccyRtTXblw8jFv1vE"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-8995721945300891"
        />
      </Head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} dark:bg-grid-small-white/5 bg-grid-small-black/5`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
