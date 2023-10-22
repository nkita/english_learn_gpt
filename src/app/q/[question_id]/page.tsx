'use client'
import { Stack, Container, Box, Fade, Link } from '@chakra-ui/react'
import Quiz from './quiz'

import Me from '@/components/me'
import TalkLog from './talklog'
import Loading from '@/components/loading'
import BoxImage from '@/components/image'
import { useUser } from '@/hooks/session'
import { useFetch } from '@/hooks/fetch'
import { useParams } from 'next/navigation'
import { Fragment, useState } from 'react'
import { useSWRConfig } from 'swr'
import NextLink from "next/link"

export default function Home() {
  const { mutate } = useSWRConfig()
  useFetch('/api/guest', { method: 'GET' })

  // 利用者の画像取得
  const user = useUser()
  const userImage = user ? user.image ?? "" : ""

  // user情報
  const { data: u_data, error: u_error, isLoading: u_loading } = useFetch(`/api/user`, { method: 'GET' })

  // Question取得
  const params = useParams()
  const question_id = params.question_id
  const { data: q_data, error: q_error, isLoading: q_isLoading } = useFetch(`/api/question/${question_id}`, { method: 'GET' })

  const [inprogress, setInprogress] = useState(false)
  // Questionがnullでない場合ログを取得
  const { data: tl_data, error: tl_error, isLoading: tl_isLoading } = useFetch(
    `/api/question/${question_id}/talklog`,
    { method: 'GET' },
    {
      refreshInterval: inprogress ? 3000 : 0,
      onSuccess: (data: any) => {
        if (data) {
          setInprogress(data.logs.at(-1).speaker === 'user')
          mutate(`/api/user`)
          mutate(`/api/user`)
        }
      }
    }
  )
  const handleSubmit = (flg: boolean) => setInprogress(flg)

  return (
    <Fade in={true}>

      <Box bg={"#fafafa"}>
        <Container
          h={`calc(100vh - 110px)`}
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
            <Fragment>
              <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <BoxImage src='/not-found-question.svg' alt={'Not Found'} size='420px' text={"I'm sooooorry... I couldn't locate it. _(:3｣∠)_"} />
                <Link pt={5} color={'gray.500'} href={'/q'}>再検索</Link>
              </Box>
            </Fragment>
          }
          {q_isLoading &&
            <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Loading />
            </Box>
          }
          {q_data &&
            <Stack spacing='4'>
              <Quiz
                description={q_data.description}
                content={q_data.content}
                type={q_data.type}
                level={q_data.level}
                max_count={!u_data ? null : u_data.count.limit}
                current_count={!u_data ? null : u_data.count.now}
                q_status={q_data.status}
                q_id={q_data.id}
              />
              <TalkLog
                userImage={userImage}
                quizId={q_data.quiz_id}
                talklog={tl_data}
                error={tl_error}
                isLoading={tl_isLoading}
                inprogress={inprogress}
                max_count={!u_data ? null : u_data.count.limit}
                current_count={!u_data ? null : u_data.count.now}
              />
            </Stack>
          }
        </Container>
      </Box >
      <Me user={user}
        disabled={
          q_isLoading
          || !q_data
          || inprogress
          || (tl_data && tl_data.question_satatus === 'Completed')
          || (u_data && u_data.count.limit === u_data.count.now)
        }
        submit={handleSubmit}
        questionId={question_id} />
    </Fade >
  );
}
