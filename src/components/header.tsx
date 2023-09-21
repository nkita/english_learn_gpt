'use client'
import NextLink from "next/link"
import { Box, Icon, Flex, Container, Heading, Link, Stack } from '@chakra-ui/react'

export default function Header() {
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
                            <Heading as="h1" size="sm" letterSpacing={'tighter'} color={"whiteAlpha.900"}>
                                <Link as={NextLink} href='/home'> English Learning with GPT</Link>
                            </Heading>
                        </Flex>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                            <LinkItem href='/api/auth/signin' path='/'>SignIn</LinkItem>
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
    const active = path === href
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            color={'whiteAlpha.900'}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}