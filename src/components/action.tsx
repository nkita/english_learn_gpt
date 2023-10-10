'use client'
import { Box, Stack } from '@chakra-ui/react'
import { NextQuestionButton } from '@/components/newquestion'

export default function Action({ quizId }: { quizId: string }) {
  return (
    <>
      <Stack p={5} direction={"row"} justifyContent={'center'}>
        <NextQuestionButton label={"再挑戦"} quizId={quizId} />
        <NextQuestionButton label={"次の問題"} />
      </Stack>
      <Box h={['100px','0px']} />
    </>
  );
}
