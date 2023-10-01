'use client';

import { Box, Button, useToast } from "@chakra-ui/react";
import { requestJson } from '@/lib/request';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const NextQuestionButton = () => {
    const router = useRouter()

    const handleOnClick = () => {
        const id = requestJson('/api/question/', {}).then(res => {
            if (res.ok) return res.json()
            throw Error(res.statusText)
        }).catch(e => {
            const toast = useToast()
            toast({
                description: '問題の作成に失敗しました。時間をおいてお試しください。',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }).then((q) => {
            router.push(`/q/${q.id}`)
        })
    }

    return (
        <>
            <Button
                colorScheme="teal"
                variant={'solid'}
                onClick={handleOnClick}>
                次の問題に進む
            </Button>
        </>
    )
};
