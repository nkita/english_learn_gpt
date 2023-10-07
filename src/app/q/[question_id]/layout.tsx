import type { FC, PropsWithChildren } from "react";
import type { Metadata } from 'next'

const RootLayout: FC<PropsWithChildren> = ({ children }) => children

export default RootLayout;


export const metadata: Metadata = {
    title: 'Question | ChatEPT',
}
