'use client'
import { IconButton, Switch, Box, Radio, RadioGroup, Text, Stack, Select, useDisclosure, useToast, Button, Modal, ModalOverlay, ModalHeader, ModalBody, ModalContent, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { FaArrowsRotate, FaBan } from 'react-icons/fa6'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/localstorage'
import { requestJson } from '@/lib/request';
import { useSWRConfig } from 'swr'


export default function ChangeModeModal({ q_status, q_id, inprogress }: { q_status: string, q_id: string, inprogress: boolean }) {
  const { mutate } = useSWRConfig()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, setValue, control } = useForm()

  const [type, setType] = useLocalStorage('type', 1)
  const [level, setLevel] = useLocalStorage('level', 'B')
  const [random, setLSRandom] = useLocalStorage('isRandom', false)

  const [isRandom, setRandom] = useState(random)

  useEffect(() => {
    setValue('random', isRandom)
    setValue('level', level)
  })

  const onSubmit = (data: any) => {
    setType(data.type)
    setLevel(data.level)
    setLSRandom(data.random)
    requestJson(`/api/question/${q_id}`, {
      type: data.type,
      level: data.level,
      random: data.random
    }).then(res => {
      if (res.ok) return res.json()
      throw Error(res.status === 404 ?
        '問題が見つかりませんでした、設定を変更して再度チャレンジしてください。'
        : '問題の作成に失敗しました。時間をおいてお試しください。')

    }).then((q) => {
      mutate(`/api/question/${q_id}`)
      onClose()
    }).catch(e => {
      toast({
        description: e.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    })
  }
  return (
    <>
      {(q_status === 'Inprogress' && !inprogress) &&
        <Button leftIcon={<FaArrowsRotate />} size="xs" colorScheme='blue' variant='link' onClick={onOpen}>
          問題を変更する
        </Button>
      }
      {(q_status !== 'Inprogress' || inprogress) &&
        <Button leftIcon={<FaBan />} size="xs" colorScheme='gray' color='blackAlpha.500' _hover={{ cursor: 'not-allowed' }} variant='link'>
          問題を変更する
        </Button>

      }
      <Modal isOpen={isOpen} onClose={onClose} size={['sm', 'lg']}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>問題を変更</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={'column'} spacing={4} pt={5}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Text pr={2}> ランダム出題</Text>
                <Switch id='roundom' defaultChecked={isRandom} onChange={_ => {
                  setRandom(!isRandom)
                  setValue('random', !isRandom)
                }} size='md' />
              </Box>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Text> タイプ</Text>
                <Controller
                  name="type"
                  control={control}
                  defaultValue={String(type)}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup onChange={onChange} value={value} isDisabled={isRandom}>
                      <Stack direction='row'>
                        <Radio value='1'>会話</Radio>
                        <Radio value='2'>翻訳</Radio>
                      </Stack>
                    </RadioGroup>
                  )} />
              </Box>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Text> レベルの選択</Text>
                <Select  {...register('level')} size='sm' w={'200px'} defaultValue={level} isDisabled={isRandom}>
                  <option value='B'>初心者</option>
                  <option value='L'>低レベル</option>
                  <option value='N'>普通レベル</option>
                  <option value='M'>中レベル</option>
                  <option value='H'>高レベル</option>
                </Select>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' width={'100%'} onClick={handleSubmit(onSubmit)}>
              チェンジ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
