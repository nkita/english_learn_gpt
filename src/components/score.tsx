'use client';

import { Box, Text } from "@chakra-ui/react";
import { Fredoka } from 'next/font/google'
import { get_color_sets } from "@/lib/util";

const font = Fredoka({ subsets: ['latin'] })

export const Score = ({ value }: { value: number | string }) => {
    const colors = get_color_sets(value)
    return (
        <>
            <Box
                className={font.className}
                display={'flex'}
                fontSize={['xl', '4xl']}
                alignItems={'center'}
                justifyContent={'center'}
                // bg={'whiteAlpha.700'}
                bg={colors.bg}
                color={colors.color}
                rounded={90}
                border={'1px solid'}
                borderColor={colors.bcolor}
                w={['50px', '75px']}
                h={['50px', '75px']}
                boxShadow={'xs'}>
                {value}
            </Box>
        </>
    )
};

