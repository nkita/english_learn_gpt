"use client";

import { SessionProvider } from "next-auth/react";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import type { FC, PropsWithChildren } from "react";

export const NextAuthProvider: FC<PropsWithChildren> = ({ children }) => <SessionProvider>{children}</SessionProvider>;
export const _CacheProvider: FC<PropsWithChildren> = ({ children }) => <CacheProvider>{children} </CacheProvider>;
export const _ChakraProvider: FC<PropsWithChildren> = ({ children }) => <ChakraProvider>{children} </ChakraProvider>;

