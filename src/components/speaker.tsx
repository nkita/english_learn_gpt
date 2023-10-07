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
    Text,
    Fade
} from '@chakra-ui/react'
import { Fragment } from 'react';
import { Score } from '@/components/score';
import { yyyymmddhhmm, get_color_sets } from '@/lib/util';


export function User({ userImage, content, create_at }: { userImage: string | null, content: string, create_at: string }) {
    const date = yyyymmddhhmm.format(new Date(create_at))
    return (
        <Fade in={true}>
            <Card ml={20}>
                <CardBody bg={'orange.50'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={5}>
                        <Avatar src={userImage ?? ""} size='xs' />
                        <Text pl={2} fontSize={'sm'} color={"gray.500"}>{date}</Text>
                    </Box>
                    <Text>
                        {content.split('\n').map((c, index) => <Fragment key={index}>{c}<br /></Fragment>)}
                    </Text >
                </CardBody>
            </Card>
        </Fade>
    );
}

export function AI({ content, score, solution, create_at }: { content: string, score?: string | null | number, solution?: string | null, create_at: string }) {
    const date = yyyymmddhhmm.format(new Date(create_at))
    return (
        <Fade in={true} >
            <Card mr={20}>
                <CardBody>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={5}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                bg={'rgba(0,0,0,0)'}
                                fontSize={'2xl'}
                            >{get_color_sets(score).face}</Box>
                            <Text fontWeight={'bold'} pl={2}>Answer</Text>
                        </Box>
                        <Text color={"gray.500"} fontSize={'sm'} pl={2}>{date}</Text>
                    </Box>
                    <Stack spacing='4'>
                        <Stack pb={2} pl={2} direction={"row"} justifyContent={'space-between'}>
                            {score !== undefined && score !== null && <Score value={score} />}
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
        </Fade>
    );
}
