import prisma from "@/db/prisma";
import { randomUUID } from "crypto";
export const select = async (where: any) => await prisma.questions.findMany({ where: where })

/**
 * 質問作成　質問は未完了の問題がある場合は作成できない。
 * @param user_id 
 * @returns 
 */
// export const create = async (user_id: string, quiz_id: string) => await prisma.$transaction(async (prisma) => {
//     const hasProgress = await prisma.questions.findFirst({ where: { user_id: user_id, status: 'Inprogress' } })
//     return hasProgress
//         ?? await prisma.questions.create({
//             data: {
//                 id: randomUUID(),
//                 quiz_id: quiz_id,
//                 user_id: user_id,
//                 status: 'Inprogress',
//                 create_at: new Date(),
//                 update_at: new Date(),
//             }
//         })
// })

/**
 * 質問作成　強制で作成。
 * @param user_id 
 * @returns 
 */
export const create = async (user_id: string, quiz_id: string) => await prisma.questions.create({
    data: {
        id: randomUUID(),
        quiz_id: quiz_id,
        user_id: user_id,
        status: 'Inprogress',
        create_at: new Date(),
        update_at: new Date(),
    }
})

/**
 * 
 * @param where 
 * @returns 
 */
export const select_on_quiz = async (where: any) => await prisma.questions.findFirst({
    select: {
        id: true,
        status: true,
        create_at: true,
        update_at: true,
        quiz: {
            select: {
                content: true,
                level: true,
                option: true,
                quiz_type: true
            }
        }
    },
    where: where
})

/**
 * ステータス更新
 * @param user_id 
 * @returns 
 */
export const update = async (data: any, where: any) => await prisma.questions.update({
    where: where,
    data: data
})