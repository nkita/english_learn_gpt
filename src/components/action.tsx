'use client'
import { Box, Stack } from '@chakra-ui/react'
import { NextQuestionButton } from '@/components/newquestion'
import { Fragment } from 'react';

export default function Action({ quizId, restCount }: { quizId: string, restCount: number }) {
  return (
    <>
      <Stack p={5} direction={"row"} justifyContent={'center'}>
        {restCount > 0 &&
          <Fragment>
            <NextQuestionButton label={"再挑戦"} quizId={quizId} />
            <NextQuestionButton label={"次の問題"} />
          </Fragment>
        }
        {restCount <= 0 &&
          <Box fontSize={'sm'} color={'gray.500'} textAlign={'center'}>利用回数上限に達しました<br />明日再度チャレンジしてください！</Box>
        }
      </Stack>
    </>
  );
}
