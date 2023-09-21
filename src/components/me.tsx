'use client'
import { Box, Avatar, Text, Container, Textarea, Progress, Stack, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useRef, useState } from 'react';

import { isEnglishChars } from '@/lib/util'

export default function Me({ userImage, disabled = false }: { userImage: string | null, disabled?: boolean }) {
    const ref = useRef<HTMLTextAreaElement>(null)

    const [charCount, setCharCount] = useState(0)
    const handleOnChange = () => {
        if (ref.current) {
            setCharCount(ref.current.value.length)
        }
    }
    const maxCharCount = 200
    return (
        <Box position={'fixed'} bottom={0} w='100%' bg='#f9f9f9'>
            <Container
                maxW='container.md'
                bg={'whiteAlpha.800'}
                pt={10}
                pb={3}
                roundedTopLeft={20}
                roundedTopRight={20}
                shadow={'xl'}>
                <Box display={'flex'}>
                    <Box pr={5} display={'flex'}>
                        <Avatar src={userImage ?? ""} size={'lg'} />
                    </Box>
                    <Textarea
                        placeholder='Here is a your answer.'
                        maxLength={maxCharCount}
                        rows={3}
                        ref={ref}
                        bg={'whiteAlpha.900'}
                        disabled={disabled}
                        onChange={handleOnChange}
                        resize={'none'} />
                </Box>
                <Box textAlign={'end'}>
                    <Text color={'gray.500'} fontSize={'xs'}>{charCount}/{maxCharCount}文字</Text>
                </Box>
            </Container>
        </Box >
    );
}
