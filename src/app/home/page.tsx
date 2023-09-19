'use client'
import { Stack, Container, Box } from '@chakra-ui/react'
import Quiz from './quiz'
import Result from './result'
import Answer from './answer'
import Me from './me'
import Action from './action'

import { useUser } from '@/hooks/session'
import { signIn } from "next-auth/react";

export default function Home() {
  const user = useUser()
  const userImage = user ? user.image ?? "" : ""

  // signIn()
  return (
    <>
      <Box bg={'#fafafa'}>
        <Container h={`calc(100vh - 150px)`} pt={20} maxW={'container.md'} overflow={'scroll'} overflowY={'auto'} overflowX={'hidden'}>
          <Stack spacing='4'>
            <Quiz />
            <Answer userImage={userImage} />
            <Result />
            <Action />
          </Stack>
        </Container >
      </Box>
      <Me userImage={userImage} />
    </>
  );
}
