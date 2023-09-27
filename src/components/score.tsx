'use client';

import { Box, Text } from "@chakra-ui/react";
import { Fredoka } from 'next/font/google'

const font = Fredoka({ subsets: ['latin'] })

export const Score = ({ value }: { value: number | string }) => {
    let _score = 0;
    if (typeof value === "string") {
        switch (value) {
            case 'S':
                _score = 100
                break;
            case 'A':
                _score = 99
                break;
            case 'B':
                _score = 80
                break;
            case 'C':
                _score = 70
                break;
            case 'F':
                _score = 0
                break;
            default:
                _score = 50

        }
    } else {
        _score = value
    }
    let colors = color_sets.filter(cs => (cs.score[0] <= _score && _score <= cs.score[1]))[0]
    if (colors === undefined) colors = { score: [], bg: 'red.500', bcolor: 'red.500', color: 'white' }
    return (
        <>
            <Box
                className={font.className}
                display={'flex'}
                fontSize={'4xl'}
                alignItems={'center'}
                justifyContent={'center'}
                // bg={'whiteAlpha.700'}
                bg={colors.bg}
                color={colors.color}
                rounded={90}
                border={'1px solid'}
                borderColor={colors.bcolor}
                w='75px'
                h='75px'
                boxShadow={'xs'}>
                {value}
            </Box>
        </>
    )
};

const color_sets = [
    { score: [0, 20], bg: 'gray.500', bcolor: 'gray.500', color: 'white' },
    { score: [21, 40], bg: 'cyan.500', bcolor: 'cyan.500', color: 'white' },
    { score: [41, 60], bg: 'purple.500', bcolor: 'purple.500', color: 'white' },
    { score: [61, 80], bg: 'green.500', bcolor: 'green.500', color: 'white' },
    { score: [81, 99], bg: 'yellow.500', bcolor: 'yellow.500', color: 'white' },
    { score: [100, 100], bg: 'red.500', bcolor: 'red.500', color: 'white' },
]
