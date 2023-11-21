import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextAuthProvider, _CacheProvider, _ChakraProvider } from "@/app/providers";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/nextAuthOptions";
import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <_CacheProvider>
          <_ChakraProvider>
            <NextAuthProvider>
              <Header />
              {children}
            </NextAuthProvider>
          </_ChakraProvider>
        </_CacheProvider>
      </body>
    </html>
  )
}


export const metadata: Metadata = {
  title: 'Home | ChatEPT',
  openGraph: {
    type: "website",
    // url: "https://///",　ToDo
    title: "Home | Chat EPT",
    description: "Chat English Personal Trainer(ChatEPT)は、英語学習サービスです。ChatEPTでは、あなたに合った、あなたのためにAI（ChatGPT）がアドバイスします。",
    siteName: "ChatEPT",
    images: [{
      url: "/logo2.png",
    }],
  }
}
