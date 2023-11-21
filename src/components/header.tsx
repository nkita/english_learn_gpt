'use client'
import NextLink from "next/link"
import { Box, Flex, Container, Heading, Link, Stack } from '@chakra-ui/react'
import { useUser } from "@/hooks/session"
import { usePathname } from "next/navigation"
import { Baloo_Bhai_2, Comfortaa } from 'next/font/google'

const font = Comfortaa({ subsets: ['latin'] })
const fontQ = Baloo_Bhai_2({ subsets: ['latin'] })

export default function Header() {
    // 利用者の画像取得
    const user = useUser()
    const path = usePathname()
    return (
        <>
            <Box
                as='nav'
                position='fixed'
                zIndex={9}
                w='100%'
                bg={'blue.600'}
                p={2}
            >
                <Container
                    bg={'blue.600'}
                    p={2}
                    maxW={'container.md'}
                    centerContent
                >
                    <Box w={'100%'} display={'flex'} justifyContent={'space-between'}>
                        <Flex align="center" mr={5}>
                            <Heading size="md" color={"whiteAlpha.900"}>
                                <Link
                                    href='/'
                                    className={font.className}
                                    _hover={{ textDecorationLine: 'none' }}
                                >
                                    ChatEPT α
                                </Link>
                            </Heading>
                        </Flex>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} className={fontQ.className}>
                            <LinkItem href='/q' path={path}>Q</LinkItem>
                            <Box color={'whiteAlpha.900'}>{'/'}</Box>
                            <LinkItem href='/terms' path={path}>Terms</LinkItem>
                            {/* <LinkItem href='/home' path='/'>History</LinkItem> */}
                            {/* <LinkItem href='/profile' path='/'>Me</LinkItem> */}
                        </Stack>
                    </Box>
                </Container >
            </Box >
        </>
    )
}


const LinkItem = (
    {
        href,
        path,
        target,
        children,
        ...props
    }: {
        href: string;
        path: string;
        target?: string;
        children: React.ReactNode;
    }) => {
    const regex = new RegExp(href)
    const active = regex.test(path)
    return (
        <Link
            // as={NextLink}
            href={href}
            // scroll={false}
            color={'whiteAlpha.900'}
            fontWeight={active ? 'bold' : ''}
            textDecoration={active ? 'underline' : ''}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}