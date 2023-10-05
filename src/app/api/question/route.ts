import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { ex_select as q_select, create } from '@/db/questions'
import { isUUID } from '@/lib/util'
import sessionUID from '@/lib/session'
/**
 * @returns response JSON
 */
export const GET = async () => {
    const uid = await sessionUID()
    const record = await q_select({
        take: 1,
        where: {
            user_id: uid,
        },
        orderBy: {
            create_at: 'desc'
        }
    })

    if (record.length === 0) {
        return responseJson(200, await create_question(uid))
    }
    return responseJson(200, record[0])
}

/**
 * Questionの作成。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request) {
    const uid = await sessionUID()

    // パラメータからquizIDを取得
    const res = await request.json()
    const data = await create_question(uid, res.quizId)

    return data ? responseJson(200, data) : responseJson(400)
}


const create_question = async (uid: string, quizId?: string) => {
    // ランダムまたは、ID指定でQuizを取得
    let quiz: any
    if (!quizId) {
        quiz = await rand_select_one()
    } else {
        if (!isUUID(quizId)) return null
        quiz = await select({ id: quizId })
    }
    //Questionを作成
    return await create(uid, quiz[0].id)
}