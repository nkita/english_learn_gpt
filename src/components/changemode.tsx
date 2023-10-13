'use client'
import { IconButton, Switch, Box, Radio, RadioGroup, Text, Stack, Select, useDisclosure, Button, Modal, ModalOverlay, ModalHeader, ModalBody, ModalContent, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { FaGear } from 'react-icons/fa6'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/localstorage'

export default function ChangeModeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, setValue, control } = useForm()

  const [type, setType] = useLocalStorage('type', 1)
  const [level, setLevel] = useLocalStorage('level', 'N')
  const [isRandom, setRandom] = useLocalStorage('isRandom', true)

  useEffect(() => {
    setValue('random', isRandom)
    setValue('level', level)
  })

  const onSubmit = (data: any) => {
    setType(data.type)
    setLevel(data.level)
    setRandom(data.random)
    onClose()
  }

  return (
    <>
      <IconButton
        variant='none'
        colorScheme='teal'
        aria-label='config'
        icon={<FaGear />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            次回の出題から変更内容が有効になります。
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
                  defaultValue={type}
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
                  <option value='B'>Begginer</option>
                  <option value='L'>Low</option>
                  <option value='N'>Normal</option>
                  <option value='M'>Medium</option>
                  <option value='H'>High</option>
                </Select>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' width={'100%'} onClick={handleSubmit(onSubmit)}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
