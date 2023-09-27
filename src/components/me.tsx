'use client'
import { Box, Avatar, Text, Container, Textarea, Button, useToast, Spinner } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { ChatIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { isEnglishChars } from '@/lib/util';
import { requestJson } from '@/lib/request';
import { useSWRConfig } from 'swr'

export default function Me({
    userImage,
    disabled = false,
    questionId,
    lock,
}: {
    userImage: string | null,
    disabled?: boolean,
    questionId: string | string[],
    lock: boolean
}) {
    const [charCount, setCharCount] = useState(0)
    const [chars, setChars] = useState("")
    const [submitLock, setSubmitLock] = useState(!chars || lock)
    const [isLoading, setLoading] = useState(false)
    const { mutate } = useSWRConfig()
    const handleOnChange = (txt: string) => {
        setChars(txt)
        setCharCount(txt.length)
        setSubmitLock(!txt || lock)
    }

    const toast = useToast()
    const handleSubmit = () => {
        if (!submitLock && chars) {
            if (isEnglishChars(chars)) {
                const post_url = `/api/question/${questionId}/talklog`
                setLoading(true)
                setSubmitLock(true)
                requestJson(post_url, { data: chars })
                    .then(res => {
                        if (res.ok) {
                            // setSubmitLock(true)
                            handleOnChange('')
                            mutate(post_url)
                        } else {
                            throw Error(res.statusText)
                        }
                    })
                    .catch(e => {
                        toast({
                            title: e.message,
                            description: '送信に失敗しました。時間をおいて再度送信するか、メッセージを見直してください。',
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                        })
                    }).finally(() => {
                        setLoading(false)
                    })

            } else {
                toast({
                    description: '英語以外の文字が入力されています。',
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                })
            }
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
                                bg={'whiteAlpha.900'}
                                disabled={disabled || lock}
                                value={chars}
                                onChange={e => handleOnChange(e.target?.value)}
                                resize={'none'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'end'}>
                            <Button
                                leftIcon={submitLock ? <NotAllowedIcon /> : <ChatIcon />}
                                h={'100%'}
                                colorScheme='purple'
                                color={'whiteAlpha.900'}
                                bg={submitLock ? 'gray.400' : 'blue.400'}
                                cursor={submitLock ? 'not-allowed' : 'pointer'}
                                _hover={{ bg: submitLock ? 'gray.400' : 'blue.500' }}
                                disabled={submitLock}
                                mb={4}
                                isLoading={false}
                                onClick={e => handleSubmit()}
                            >
                                <Box w={'30px'}>{isLoading ? <Spinner size='sm' /> : "送信"}</Box>
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
