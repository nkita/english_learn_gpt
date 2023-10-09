import type { FC, PropsWithChildren } from "react";
import type { Metadata } from 'next'
import Header from '@/components/header'
import Script from 'next/script'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    const gaid = process.env.GAID
    return (
        <>
            <Header />
            {children}
            <Script src={"https://www.googletagmanager.com/gtag/js?id=" + gaid} />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
 
                gtag('config', "${gaid}");
            `}
            </Script>
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
