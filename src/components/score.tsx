'use client';

import { Box, Text } from "@chakra-ui/react";
import { Caveat } from 'next/font/google'
import { get_color_sets } from "@/lib/util";

const font = Caveat({ subsets: ['latin'] })

export const Score = ({ value }: { value: number | string }) => {
    const colors = get_color_sets(value)
    return (
        <>
            <Box
                className={font.className}
                display={'flex'}
                fontSize={['md', '2xl']}
                fontWeight={'bold'}
                textDecoration={'underline'}
                alignItems={'center'}
                justifyContent={'center'}
                // bg={'whiteAlpha.700'}
                bg={colors.bg}
                color={colors.color}
                rounded={5}
                px={7}
                border={'1px solid'}
                borderColor={colors.bcolor}
                w={['30px', '40px']}
                h={['30px', '40px']}
                >
                {value}
            </Box>
        </>
    )
};

