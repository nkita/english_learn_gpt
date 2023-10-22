'use client'
import { Box, Spinner, Text, Container, Heading, Button, Stack } from '@chakra-ui/react'
import { AI, User } from '@/components/speaker';
import Action from '@/components/action';
import Loading from '@/components/loading'
import BoxImage from '@/components/image'
import { Scoring, Dots } from '@/components/lottie/Player'

export default function TalkLog({
  userImage,
  quizId,
  talklog,
  error,
  isLoading,
  inprogress,
  max_count,
  current_count
}: {
  userImage: string,
  quizId: string,
  talklog?: any,
  error: any,
  isLoading: boolean,
  inprogress: boolean,
  max_count: number,
  current_count: number
}) {
  const random_img = random_image()

  const logs = !talklog ? null : talklog.logs
  const rest_count = max_count - current_count;

  if (!logs && !isLoading) {
    return (
      <Box display={'flex'} pt={5} justifyContent={'center'} alignItems={'center'}>
        <BoxImage src={random_img.image} alt={'background image'} size='200px' text={random_img.message} />
      </Box>
    )
  }
  if (error && !isLoading) {
    return (
      <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <BoxImage src='/error.svg' alt={'System Error'} text={"System error. _(:3｣∠)_"} />
      </Box>
    )
  }
  if (isLoading) {
    return (
      <Box h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Loading />
      </Box>
    )
  }

  return (
    <>
      {logs.length > 0 && logs.map((l: any, index: number) => {
        if (l.speaker === 'user') return <User key={l.id} userImage={userImage} content={l.content} create_at={l.create_at} />
        if (l.speaker === 'ai') return <AI key={l.id} content={l.content} score={l.score} solution={l.best_answer} create_at={l.create_at} />
      })}
      {inprogress &&
        <Box w={'100%'} display={'flex'} justifyContent={'center'}>
          <Box p={5} boxShadow={'inherit'} display={'flex'} justifyItems={'center'} alignItems={'center'}>
            <Scoring loop style={{ width: '50px', height: '50px' }} />
            <Dots loop style={{ width: '50px', height: '50px' }} />
          </Box>
        </Box>
      }
      {!inprogress &&
        <Action quizId={quizId} restCount={rest_count} />
      }
      <Box h={['100px', '10px']} />
    </>
  );
}



const random_image = () => {
  const list = [
    { image: '/random/01.svg', 'message': '問題を解いてみよう！' },
    { image: '/random/02.svg', 'message': 'さぁ、頑張ろう！' },
    { image: '/random/03.svg', 'message': '今日も１問！！' },
    { image: '/random/04.svg', 'message': 'さぁ、問題を解いてみよう！' },
    { image: '/random/05.svg', 'message': 'さぁ、問題を解いてみよう！' },
    { image: '/random/06.svg', 'message': 'さぁ、問題を解いてみよう！' },
    { image: '/random/07.svg', 'message': 'さぁ、問題を解いてみよう！' },
    { image: '/random/08.svg', 'message': 'さぁ、問題を解いてみよう！' },
    { image: '/random/09.svg', 'message': 'ファイト!' }
  ]

  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex]
}