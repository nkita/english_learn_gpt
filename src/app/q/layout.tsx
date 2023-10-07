import type { FC, PropsWithChildren } from "react";
import type { Metadata } from 'next'
import Header from '@/components/header'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default RootLayout;


export const metadata: Metadata = {
    title: 'Home | ChatEPT',
    openGraph: {
        type: "website",
        // url: "https://///",　ToDo
        title: "Home | Chat EPT",
        description: "Chat English Personal Trainer(ChatEPT)は、英語学習サービスです。ChatEPTでは、あなたに合った、あなたのためにAI（ChatGPT）がアドバイスします。",
        siteName: "ChatEPT",
        // images: [{               ToDo favico
        //     url: "https://example.com/og.png",
        // }],
    }
}
