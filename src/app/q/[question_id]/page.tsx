'use client'
import { Stack, Container, Box } from '@chakra-ui/react'
import Quiz from './quiz'

import Me from '@/components/me'
import TalkLog from './talklog'
import Loading from '@/components/loading'
import BoxImage from '@/components/image'
import { useUser } from '@/hooks/session'
import { useFetch } from '@/hooks/fetch'
import { useParams } from 'next/navigation'


export default function Home() {
  useFetch('/api/guest', { method: 'GET' })

  // 利用者の画像取得
  const user = useUser()
  const userImage = user ? user.image ?? "" : ""

  // Question取得
  const params = useParams()
  const question_id = params.question_id
  const { data: q_data, error: q_error, isLoading: q_isLoading } = useFetch(`/api/question/${question_id}`, { method: 'GET' })

  // Questionがnullでない場合ログを取得
  const { data: tl_data, error: tl_error, isLoading: tl_isLoading } = useFetch(`/api/question/${question_id}/talklog`, { method: 'GET' })

  return (
    <>
      <Box bg={'#fafafa'}>
        <Container
          h={`calc(100vh - 150px)`}
          pt={20} maxW={'container.md'}
          overflow={'scroll'}
          overflowY={'auto'}
          overflowX={'hidden'}
          sx={{
            '&::-webkit-scrollbar': {
              backgroundColor: `#fafafa`,
              width: '10px',
              transition: '10s',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '10px',
              backgroundColor: '#dadada',
              transition: '10s',
            },
          }}
        >
          {(!q_data || q_error) && !q_isLoading &&
            <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BoxImage src='/not-found-question.svg' alt={'Not Found'} size='420px' text={"I'm sooooorry... I couldn't locate it. _(:3｣∠)_"} />
            </Box>
          }
          {q_isLoading &&
            <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Loading />
            </Box>
          }
          {q_data &&
            <Stack spacing='4'>
              <Quiz description={q_data.description} content={q_data.content} type={q_data.type} max_count={10} current_count={1} />
              <TalkLog userImage={userImage} logs={tl_data} error={tl_error} isLoading={tl_isLoading} />
            </Stack>
          }
        </Container>
      </Box >
      <Me userImage={userImage} disabled={q_isLoading || !q_data} />
    </>
  );
}
