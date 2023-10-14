import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { ex_select as q_select, create } from '@/db/questions'
import { get_level_number, isUUID, validations } from '@/lib/util'
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
    const quizId = res.quizId
    const level = res.level
    const type = JSON.parse(res.type)
    const random = JSON.parse(res.random)
    if (
        !validations([{ target: 'level', value: level }])
        || ![1, 2].includes(type)
        || !(typeof random == 'boolean')
    ) return responseJson(400)

    const data = await create_question(uid, level, type, random, quizId)

    return data ? responseJson(200, data) : responseJson(404)
}


const create_question = async (uid: string, level: string, type: number, random: boolean, quizId?: string) => {
    // ランダムまたは、ID指定でQuizを取得
    const strLevel = get_level_number(level)
    let quiz: any
    if (!quizId) {
        quiz = await rand_select_one(random, strLevel, type)
    } else {
        if (!isUUID(quizId)) return null
        quiz = await select({ id: quizId })
    }
    if (quiz.length === 0) return null
    //Questionを作成
    return await create(uid, quiz[0].id)
}