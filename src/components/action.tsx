'use client'
import { Box, Icon, Flex, Container, Heading, Button, Stack } from '@chakra-ui/react'
import { NextQuestionButton } from '@/components/newquestion'

export default function Action() {
  return (
    <>
      <Stack p={5} direction={"row"} justifyContent={'center'}>
        <Button colorScheme='teal' variant='solid'>
          再挑戦
        </Button>
        <NextQuestionButton />
      </Stack>
    </>
  );
}
