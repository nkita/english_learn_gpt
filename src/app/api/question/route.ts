import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { create } from '@/db/questions'
import { isUUID } from '@/lib/util'
import sessionUID from '@/lib/session'
/**
 * @returns response JSON
 */
export const GET = async () => responseJson(405)

/**
 * Questionの作成。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request) {
    const uid = await sessionUID()

    // パラメータからquizIDを取得
    const res = await request.json()

    // ランダムまたは、ID指定でQuizを取得
    let quiz: any
    if (res.quizId === undefined || !res.quizId) {
        quiz = await rand_select_one()
    } else {
        if (!isUUID(res.quizId)) return responseJson(404)
        quiz = await select({ id: res.quizId })
    }
    //Questionを作成
    const result = await create(uid, quiz[0].id)

    return responseJson(200, result)
}

