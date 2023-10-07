'use client'
import { Box, CircularProgress, CircularProgressLabel, Tag, Card, CardBody, Text, Stack } from '@chakra-ui/react'
import { get_level_sets } from '@/lib/util'

export default function Quiz({ description, content, type, level, max_count = 10, current_count = 6 }: { description: string, content: string, level?: number | null, type: string, max_count: number, current_count: number }) {
  const rest_count = max_count - current_count;
  const lv_set = get_level_sets(level)
  return (
    <>
      <Box rounded={10} w={"100%"} >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'start'} pb={3}>
          <Box pr={10}>
            <Stack direction={'row'} pb={2}>
              <Tag colorScheme='gray'>{type}</Tag>
              <Tag colorScheme={lv_set.colorScheme}>{lv_set.label}</Tag>
            </Stack>
            <Text pt={3}>{description}</Text>
          </Box>
          <Box>
            <CircularProgress
              color={rest_count < 5 ? rest_count === 0 ? 'red.500' : 'orange.400' : 'green.400'}
              value={current_count / max_count * 100}>
              <CircularProgressLabel>{rest_count}</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize={'xs'}>残り回数</Text>
          </Box>
        </Box>
        <Card variant={'outline'} borderLeftColor={'blue.300'} borderLeftWidth={'10px'}>
          <CardBody>
            {content}
          </CardBody>
        </Card>
      </Box >
    </>
  );
}
