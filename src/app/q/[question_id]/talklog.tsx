'use client'
import { Box, Icon, Flex, Container, Heading, Button, Stack } from '@chakra-ui/react'
import { AI, User } from '@/components/speaker';
import Action from '@/components/action';

export default function TalkLog({ userImage, logs }: { userImage: string, logs?: any }) {
  return (
    <>
      <User userImage={userImage} />
      <AI />
      <Action />
    </>
  );
}
