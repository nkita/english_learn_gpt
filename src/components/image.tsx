'use client'
import { Text, Image, Box, Stack } from '@chakra-ui/react'

export default function ImageBox({ src, size = '150px', alt = '', text }: { src: string, size?: string, alt: string, text?: string }) {
    return (
        <Stack textAlign={'center'}>
            <Box w={size}>
                <Image
                    opacity={0.5}
                    src={src}
                    alt={alt}
                    pb={5}
                />
            </Box>
            <Text fontSize={'md'} color={'gray.500'}>{text}</Text>
        </Stack>
    )
}   