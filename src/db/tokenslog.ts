import prisma from "@/db/prisma";
import { randomUUID } from "crypto";

export const select = async (where: any) => await prisma.tokensLog.findMany({ where: where })


/**
 * Tokenログ追加　
 */
export const create = async (
    user_id: string,
    completion_tokens: number | undefined,
    prompt_tokens: number | undefined,
    total_tokens: number | undefined
) => await prisma.tokensLog.create({
    data: {
        id: randomUUID(),
        user_id: user_id,
        date: new Date(),
        completion_tokens: completion_tokens,
        prompt_tokens: prompt_tokens,
        total_tokens: total_tokens,
    }
})

