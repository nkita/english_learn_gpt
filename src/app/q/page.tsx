'use client'
import { useFetch } from '@/hooks/fetch'
import { Box, Stack } from '@chakra-ui/react'
import BoxImage from '@/components/image'
import Loading from '@/components/loading'
import { isUUID } from '@/lib/util'
import { redirect } from 'next/navigation'
import { NextQuestionButton } from '@/components/newquestion'

export default function Home() {
  useFetch('/api/guest', { method: 'GET' })
  const { data, error, isLoading } = useFetch('/api/question', { method: 'GET' })

  if (data && isUUID(data.id)) {
    redirect(`/q/${data.id}`)
  }
  return (
    <Box bg={"#fafafa"} h={"100vh"} display={'flex'} justifyItems={'center'} justifyContent={'center'} alignItems={'center'}>
      {error && <BoxImage src='/error.svg' alt='error' size='420px' text='エラーが発生しました。しばらくしてから再度アクセスしてください。' />}
      {isLoading && <Loading />}
      {(!data && !isLoading) &&
        <Stack spacing={3}>
          <BoxImage src={'/welcom.svg'} alt='welcom' size={['300px','420px']} text='😍ようこそ、ChatEPTへ😍' />
          <Box w={'100%'} display={'flex'} justifyContent={'center'}>
            <NextQuestionButton label={"チャレンジする"} />
          </Box>
        </Stack>
      }
    </Box>
  );
}

