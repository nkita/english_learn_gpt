'use client'
import Link from 'next/link'
import Header from '@/components/header'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function NotFound() {
    return (
        <>
            <Header />
            <Box bg={'#fafafa'} h={'100vh'} pt={20} display={'flex'} alignContent={'center'} justifyContent={'center'}>
                <Box display={'flex'} position={'absolute'} w={'50%'} h={'50%'}>
                    <Image src={'/not-found-question.svg'} alt='not found' fill={true} />
                </Box>
            </Box>
        </>
    )
}