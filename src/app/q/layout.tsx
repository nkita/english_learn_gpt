import type { FC, PropsWithChildren } from "react";
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


