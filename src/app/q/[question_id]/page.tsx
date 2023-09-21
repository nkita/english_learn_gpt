'use client'
import { Stack, Container, Box } from '@chakra-ui/react'
import Quiz from './quiz'
import Result from './result'
import Answer from './answer'
import Action from './action'

import Me from '@/components/me'
import Loading from '@/components/loading'
import BoxImage from '@/components/image'
import { useUser } from '@/hooks/session'
import { useFetch } from '@/hooks/fetch'
import { useParams } from 'next/navigation'


export default function Home() {
  useFetch('/api/guest', { method: 'GET' })

  const params = useParams()
  const question_id = params.question_id

  const { data, error, isLoading } = useFetch(`/api/question/${question_id}`, { method: 'GET' })

  const user = useUser()
  const userImage = user ? user.image ?? "" : ""

  if (!user) {
    // signIn('google')
  }
  // console.log('session ', user)
  // signIn()
  // signOut()

  return (
    <>
      <Box bg={'#fafafa'}>
        <Container h={`calc(100vh - 150px)`} pt={20} maxW={'container.md'} overflow={'scroll'} overflowY={'auto'} overflowX={'hidden'}>
          {!data && !isLoading &&
            <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BoxImage src='/not-found-question.svg' alt={'Not Found'} size='420px' text={"I'm sooooorry... I couldn't locate it. _(:3｣∠)_"} />
            </Box>
          }
          {isLoading &&
            <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Loading />
            </Box>
          }
          {data &&
            <Stack spacing='4'>
              <Quiz />
              <Answer userImage={userImage} />
              <Result />
              <Action />
            </Stack>
          }
        </Container >
      </Box >
      <Me userImage={userImage} disabled={isLoading || !data} />
    </>
  );
}
