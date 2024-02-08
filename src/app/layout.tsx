import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Países",
  description: "Uma lista de países feita com Next 14",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>){
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
            <nav className="w-full bg-white h-16 flex items-center justify-center">
              <section className="container flex items-center gap-3">
                <Link href='/' className="flex items-center gap-1 py-2">
                  <Image width={52} height={52} src={"/logo.png"} alt="logo da aplicação - emoji de globo"/>
                  <h1 className="font-bold text-2xl">Lista de países</h1>
                </Link>
              </section>
            </nav>
            {children}
        </main>
      </body>
    </html>
  );
}
