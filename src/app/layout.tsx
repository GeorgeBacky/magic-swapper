import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from 'next/font/google'
import Header from "@/components/Header/Header";
import AnimatedPage from "@/components/Animations/AnimatedPage";


const roboto = Roboto(
  { weight: ['300', '500', '700'], subsets: ['latin'], },
)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Magic Swapper",
  description: "Now you can swap your tokens with magic!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        <AnimatedPage>
          {children}
        </AnimatedPage>
      </body>
    </html>
  );
}
