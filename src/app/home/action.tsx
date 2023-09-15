'use client'
import { Box, Icon, Flex, Container, Heading, Button, Stack } from '@chakra-ui/react'


export default function Action() {
  return (
    <>
      <Stack p={3} direction={"row"} justifyContent={'center'}>
        <Button colorScheme='teal' variant='solid'>
          再挑戦
        </Button>
        <Button colorScheme='teal' variant='solid'>
          次の問題に進む
        </Button>
      </Stack>
    </>
  );
}
