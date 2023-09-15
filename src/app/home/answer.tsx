'use client'
import { Box, Card, CardBody, Text, Avatar } from '@chakra-ui/react'


export default function Answer({ userImage }: { userImage: string | null }) {
    return (
        <>
            <Card>
                <CardBody bg={'orange.50'}>
                    <Box display={'flex'} alignItems={'center'} pb={5}>
                        <Avatar src={userImage ?? ""} size='xs' />
                        <Text pl={2} fontSize={'sm'}>Your answer</Text>
                    </Box>
                    <Text>My Answer is Very Special</Text>
                </CardBody>
            </Card>
        </>
    );
}
