'use client'
import { Text, Image, Box } from '@chakra-ui/react'

export default function ImageBox({ src, size = '150px', alt = '', text }: { src: string, size?: string, alt: string, text?: string }) {
    return (
        <Box p={'5'} textAlign={'center'} w={size}>
            <Image
                src={src}
                alt={alt}
            />
            <Text fontSize={'md'} >{text}</Text>
        </Box>
    )
}   