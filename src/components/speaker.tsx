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
import { Score } from '@/components/score';


export function User({ userImage }: { userImage: string | null }) {
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

export function AI() {
    return (
        <>
            <Card>
                <CardBody>
                    <Box display={'flex'} alignItems={'center'} pb={5}>
                        <Avatar src={'/gpt.svg'} size='sm' bg={'white.900'} />
                        <Text fontWeight={'bold'} pl={2}>AI answer</Text>
                    </Box>
                    <Stack spacing='4'>
                        <Stack pb={2} direction={"row"} justifyContent={'space-between'}>
                            <Score value={100} />
                            <Box justifyContent={'start'} bg='yellow.100' w={"85%"}>
                                特に問題ないです
                            </Box>
                        </Stack>
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}



