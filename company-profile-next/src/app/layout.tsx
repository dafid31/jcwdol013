
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";
import Providers from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratama Company",
  description: "Pratama's Company Profile ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <StoreProvider>
            <ChakraProvider>
              <Navbar />
              {children}
              <Footer />
            </ChakraProvider>
          </StoreProvider>
        </Providers>
        </body>
    </html>
  );
}
