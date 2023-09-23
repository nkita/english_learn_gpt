'use client'
import { Box, Avatar, Text, Container, Textarea, Button, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { isEnglishChars } from '@/lib/util'
import { ChatIcon, } from '@chakra-ui/icons'

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
        <Box position={'fixed'} bottom={0} w='100%' bg='#fafafa'>
            <Container
                maxW='container.md'
                bg={'whiteAlpha.800'}
                pt={4}
                pb={3}
                roundedTopLeft={20}
                roundedTopRight={20}
                shadow={'xl'}>
                <Box display={'flex'}>
                    <Box pr={5} display={'flex'}>
                        <Avatar src={userImage ?? ""} size={'lg'} />
                    </Box>
                    <Box display={'flex'} w={'100%'}>
                        <Box pr={2} w={'100%'}>
                            <Textarea
                                placeholder='Here is a your answer.'
                                autoFocus
                                maxLength={maxCharCount}
                                rows={3}
                                ref={ref}
                                bg={'whiteAlpha.900'}
                                disabled={disabled}
                                onChange={handleOnChange}
                                resize={'none'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'end'}>
                            <Button
                                leftIcon={<ChatIcon />}
                                h={'100%'}
                                colorScheme={'purple'}
                                bg='blue.400'
                                mb={1}
                                variant='solid'
                                isLoading={false}
                            >
                                送信
                            </Button>
                            <Text color={'gray.500'} textAlign={'right'} fontSize={'xs'}>{charCount}/{maxCharCount}文字</Text>
                        </Box>
                    </Box>
                </Box>
                <Box textAlign={'end'}>
                </Box>
            </Container>
        </Box >
    );
}
