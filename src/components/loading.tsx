'use client'
import { Text, Spinner, Box } from '@chakra-ui/react'

export default function Loading({ text = 'Now Loading...' }: { text?: string }) {
  return (
    <Box p={'5'} textAlign={'center'} w={'220px'}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='md'
        py='10'
        px='10'
      />
      <Text fontSize={'md'} >{text}</Text>
    </Box>
  )
}   