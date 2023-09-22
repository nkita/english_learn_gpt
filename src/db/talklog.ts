import prisma from "@/db/prisma";
import { randomUUID } from "crypto";
export const select = async (where: any, order: any = []) => await prisma.talkLog.findMany({ where: where, orderBy: order })

/**
 * ログ追加　
 */
export const create = async (
    question_id: string,
    user_id: string,
    speaker: string,
    {
        content = null,
        score = null,
        best_answer = null
    }: {
        content?: string | null,
        score?: number | null,
        best_answer?: string | null
    }
) => await prisma.talkLog.create({
    data: {
        id: randomUUID(),
        user_id: user_id,
        question_id: question_id,
        speaker: speaker,
        content: content,
        score: score,
        best_answer: best_answer,
        create_at: new Date()
    }
})
