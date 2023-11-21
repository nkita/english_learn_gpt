'use client'
import { useFetch } from '@/hooks/fetch'
import { Box, Stack, Text } from '@chakra-ui/react'
import BoxImage from '@/components/image'
import { NextQuestionButton } from '@/components/newquestion'
import { Robot } from '@/components/lottie/Player'

export default function Home() {
  useFetch('/api/guest', { method: 'GET' })

  return (
    <Box bg={"#fafafa"} h={"100vh"} display={'flex'} justifyItems={'center'} justifyContent={'center'} alignItems={'center'}>

      <Robot loop style={{ width: '256px', height: '256px' }} />
      <Stack textAlign={'center'} spacing={3}>
        <Text>Hi🖐 ようこそChatEPTへ💜</Text>
        <Text>ChatEPTは英語学習サービスです🤖</Text>
        <Text>あなたの考えた最高な文章を</Text>
        <Text>あなたのためだけにアドバイスします👍</Text>
        <Box w={'100%'} display={'flex'} justifyContent={'center'}>
          <NextQuestionButton label={"チャレンジする"} />
        </Box>
      </Stack>
    </Box>
  );
}
