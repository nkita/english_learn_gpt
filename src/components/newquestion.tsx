'use client';

import { Button, useToast } from "@chakra-ui/react";
import { requestJson } from '@/lib/request';
import { useRouter } from 'next/navigation'
import useLocalStorage from '@/hooks/localstorage'

export const NextQuestionButton = ({ quizId = null, label }: { quizId?: string | null, label: string }) => {
    const router = useRouter()
    const toast = useToast()
    const [type, setType] = useLocalStorage('type', 1)
    const [level, setLevel] = useLocalStorage('level', 'B')
    const [isRandom, setRandom] = useLocalStorage('isRandom', false)

    const handleOnClick = () => {
        requestJson('/api/question/', {
            quizId: quizId,
            type: type,
            level: level,
            random: isRandom
        }).then(res => {
            if (res.ok) return res.json()
            throw Error(res.status === 404 ?
                '問題が見つかりませんでした、設定を変更して再度チャレンジしてください。'
                : '問題の作成に失敗しました。時間をおいてお試しください。')

        }).then((q) => {
            router.push(`/q/${q.id}`)
        }).catch(e => {
            toast({
                description: e.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
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
