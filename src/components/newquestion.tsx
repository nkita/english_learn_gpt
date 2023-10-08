'use client';

import { Button, useToast } from "@chakra-ui/react";
import { requestJson } from '@/lib/request';
import { useRouter } from 'next/navigation'

export const NextQuestionButton = ({ quizId = null, label }: { quizId?: string | null, label: string }) => {
    const router = useRouter()
    const toast = useToast()

    const handleOnClick = () => {
        requestJson('/api/question/', { quizId: quizId }).then(res => {
            if (res.ok) return res.json()
            throw Error(res.statusText)
        }).catch(e => {
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
                {label}
            </Button>
        </>
    )
};
