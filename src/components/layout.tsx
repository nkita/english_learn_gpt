'use client'
import Link from "next/link"
import type { ReactNode } from "react"
import Header from './header'
import { SessionProvider } from "next-auth/react"

import type { Session } from "next-auth"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
                <Header />
                {children}
        </>
    )
}   