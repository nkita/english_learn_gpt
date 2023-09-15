'use client'
import { Box, CircularProgress, CircularProgressLabel, Tag, Card, CardBody, Text, Stack } from '@chakra-ui/react'


export default function Quiz() {
  return (
    <>
      <Box rounded={10} w={"100%"} >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'start'} pb={3}>
          <Box pr={10}>
            <Stack direction={'row'}>
              <Tag colorScheme='gray'>初級</Tag><Tag colorScheme='cyan'>中級</Tag><Tag colorScheme='purple'>上級</Tag><Tag colorScheme='green'>超上級</Tag><Tag colorScheme='yellow'>プロ</Tag><Tag colorScheme='red'>鬼</Tag>
            </Stack>
            <Text pt={3}>日本語を英語に翻訳してください。あなたの英語力を測定します。</Text>
          </Box>
          <Box>
            <CircularProgress value={30}><CircularProgressLabel>4</CircularProgressLabel></CircularProgress>
            <Text fontSize={'xs'}>残り回数</Text>
          </Box>
        </Box>
        <Card variant={'outline'}>
          <CardBody>
            asdfasdfadsf
          </CardBody>
        </Card>
      </Box >
    </>
  );
}
