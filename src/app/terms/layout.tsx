import type { FC, PropsWithChildren } from "react";

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