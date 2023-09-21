import prisma from "@/db/prisma";
import { randomUUID } from "crypto";
export const select = async (where: any) => await prisma.questions.findMany({ where: where })

/**
 * 質問作成　質問は未完了の問題がある場合は作成できない。
 * @param user_id 
 * @returns 
 */
export const create = async (user_id: string, quiz_id: string) => await prisma.$transaction(async (prisma) => {

    const hasProgress = await prisma.questions.findFirst({ where: { user_id: user_id, completed: false } })

    return hasProgress
        ?? await prisma.questions.create({
            data: {
                id: randomUUID(),
                quiz_id: quiz_id,
                user_id: user_id,
                completed: false,
                create_date: new Date(),
                update_date: new Date(),
            }
        })
})
