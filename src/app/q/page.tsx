'use client'
import { useFetch } from '@/hooks/fetch'
import { Box } from '@chakra-ui/react'
import BoxImage from '@/components/image'
import Loading from '@/components/loading'
import { isUUID } from '@/lib/util'
import { redirect } from 'next/navigation'

export default function Home() {
  useFetch('/api/guest', { method: 'GET' })
  const { data, error, isLoading } = useFetch('/api/question', { body: JSON.stringify({ "quizId": "cd855e12-56c8-11ee-ba65-3ab5df3c8e16" }) })

  if (data && isUUID(data.id)) {
    redirect(`/q/${data.id}`)
  }

  return (
    <Box bg={"#fafafa"} h={"100vh"} display={'flex'} justifyItems={'center'} justifyContent={'center'} alignItems={'center'}>
      {error && <BoxImage src='/error.svg' alt='error' size='420px' text='エラーが発生しました。しばらくしてから再度アクセスしてください。' />}
      {isLoading && <Loading />}
    </Box>
  );
}