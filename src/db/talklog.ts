import prisma from "@/db/prisma";
import { randomUUID } from "crypto";
export const select = async (where: any) => await prisma.talkLog.findMany({ where: where })

/**
 * ログ追加　
 */
export const create = async (
    question_id: string,
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
        question_id: question_id,
        speaker: speaker,
        content: content,
        score: score,
        best_answer: best_answer,
        create_at: new Date()
    }
})
