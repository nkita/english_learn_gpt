'use client'
import {
    Box,
    Card,
    CardBody,
    Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Avatar,
    Text
} from '@chakra-ui/react'
import { Fragment } from 'react';
import { Score } from '@/components/score';


export function User({ userImage, content }: { userImage: string | null, content: string }) {
    return (
        <>
            <Card ml={20}>
                <CardBody bg={'orange.50'}>
                    <Box display={'flex'} alignItems={'center'} pb={5}>
                        <Avatar src={userImage ?? ""} size='xs' />
                        <Text pl={2} fontSize={'sm'}>Your answer</Text>
                    </Box>
                    <Text>
                        {content.split('\n').map((c, index) => <Fragment key={index}>{c}<br /></Fragment>)}
                    </Text >
                </CardBody>
            </Card>
        </>
    );
}

export function AI({ content, score, solution }: { content: string, score?: string | null, solution?: string | null }) {
    return (
        <>
            <Card mr={20}>
                <CardBody>
                    <Box display={'flex'} alignItems={'center'} pb={5}>
                        <Avatar src={'/gpt.svg'} size='sm' bg={'white.900'} />
                        <Text fontWeight={'bold'} pl={2}>AI answer</Text>
                    </Box>
                    <Stack spacing='4'>
                        <Stack pb={2} pl={2} direction={"row"} justifyContent={'space-between'}>
                            {score && <Score value={score} />}
                            <Box justifyContent={'start'} bg='gray.50' p={5} w={"85%"} rounded={10}>
                                {content &&
                                    content.split('\n').map((c, index) => <Fragment key={index}>{c}<br /></Fragment>)
                                }
                            </Box>
                        </Stack>
                        {solution &&
                            <Box>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                    解答例
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {solution}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        }
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}



