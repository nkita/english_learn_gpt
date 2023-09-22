'use client'
import { Text, Image, Box, Stack } from '@chakra-ui/react'

export default function ImageBox({ src, size = '150px', alt = '', text }: { src: string, size?: string, alt: string, text?: string }) {
    return (
        <Stack>
            <Box w={size}>
                <Image
                    src={src}
                    alt={alt}
                    pb={5}
                />
            </Box>
            <Text fontSize={'md'} >{text}</Text>
        </Stack>
    )
}   