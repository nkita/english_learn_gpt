import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextAuthProvider, _CacheProvider, _ChakraProvider } from "@/app/providers";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/nextAuthOptions";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatEPT',
  description: 'Chat English Personal Trainer(EPT)は、英語学習サービスです。ChatEPTでは、あなたに合った、あなたのためにAI（ChatGPT）がアドバイスします。',
}

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
              {children}
            </NextAuthProvider>
          </_ChakraProvider>
        </_CacheProvider>
      </body>
    </html>
  )
}
