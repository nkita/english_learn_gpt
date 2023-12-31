'use client'
import { Box, Avatar, Text, Container, Textarea, Button, useToast, Spinner, Link, Icon } from '@chakra-ui/react'
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from 'react';
import { ChatIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { isEnglishChars } from '@/lib/util';
import { requestJson } from '@/lib/request';
import { useSWRConfig } from 'swr'
import { signIn, signOut } from "next-auth/react"

export default function Me({
    user,
    disabled = false,
    questionId,
    submit,
}: {
    user: any,
    disabled?: boolean,
    questionId: string | string[],
    submit: (flg: boolean) => void
}) {
    const [charCount, setCharCount] = useState(0)
    const [chars, setChars] = useState("")
    const [isLoading, setLoading] = useState(false)
    const { mutate } = useSWRConfig()
    const handleOnChange = (txt: string) => {
        setChars(txt)
        setCharCount(txt.length)
    }

    const toast = useToast()
    const handleSubmit = () => {
        if (chars) {
            if (isEnglishChars(chars)) {
                const post_url = `/api/question/${questionId}/talklog`
                setLoading(true)
                submit(true)
                requestJson(post_url, { data: chars })
                    .then(res => {
                        if (res.ok) {
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
        } else {
            toast({
                description: '文字を入力してください。',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    const maxCharCount = 200

    return (
        <Box position={'fixed'} bottom={0} w='100%' bg='#fafafa'>
            <Container
                maxW='container.md'
                bg={'whiteAlpha.800'}
                pt={4}
                roundedTopLeft={20}
                roundedTopRight={20}
                shadow={'xl'}>
                <Box display={'flex'}>
                    <Box pr={5} display={['none', 'flex']}>
                        <Avatar src={user?.image} size={'lg'} onClick={_ => !user ? signIn() : signOut()} _hover={{ cursor: 'pointer' }} title={!user ? 'login' : 'logout'} />
                    </Box>
                    <Box display={'flex'} w={'100%'}>
                        <Box pr={2} w={'100%'}>
                            <Textarea
                                placeholder='ここに答えを書いてね'
                                autoFocus
                                maxLength={maxCharCount}
                                rows={3}
                                bg={'whiteAlpha.900'}
                                disabled={disabled}
                                value={chars}
                                onChange={e => handleOnChange(e.target?.value)}
                                resize={'none'} />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'end'}>
                            <Button
                                leftIcon={disabled ? <NotAllowedIcon /> : <ChatIcon />}
                                h={'100%'}
                                colorScheme='purple'
                                color={'whiteAlpha.900'}
                                bg={disabled ? 'gray.400' : 'blue.400'}
                                cursor={disabled ? 'not-allowed' : 'pointer'}
                                _hover={{ bg: disabled ? 'gray.400' : 'blue.500' }}
                                disabled={disabled}
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
                <Box textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'} py={1} >
                    <Text pr={3} fontSize={'xs'} color={'gray.500'}>Copyright © 2023 nkita</Text>
                    <Link href='https://twitter.com/nkitao7' target='_blank'><Icon color={'gray.500'} fontSize={'xs'} as={FaXTwitter} /></Link>
                </Box>
            </Container>
        </Box >
    );
}
