import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { create, select_on_quiz } from '@/db/questions'
import { isUUID } from '@/lib/util'
import { guestId } from '@/lib/guest'
import { getServerSession } from "next-auth/next"
import { nextAuthOptions } from '@/lib/nextAuthOptions'
import sessionUID from '@/lib/session'

/**
 * Questionの取得。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function GET(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)
    //　セッションチェック必要かも

    const uid = await sessionUID()
    const record = await select_on_quiz({ id: params.question_id, user_id: uid })
    if (!record) return responseJson(400, null)
    const response = {
        id: record.id,
        status: record.status,
        create_at: record.create_at,
        update_at: record.update_at,
        quiz_id: record.quiz.id,
        level: record.quiz.level,
        content: record.quiz.content,
        type: record.quiz.quiz_type.name,
        description: record.quiz.quiz_type.description
    }
    return responseJson(200, response)
}

/**
 * Questionの作成。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request) {
    if (request.headers.get('content-type') !== 'application/json') return responseJson(400)

    const session = await getServerSession(nextAuthOptions)
    const uid = session ? (!session.user.id) ? guestId() : session.user.id : guestId()

    // パラメータからquizIDを取得
    const res = await request.json()
    // ランダムまたは、ID指定でQuizを取得
    let quiz: any
    if (!res.quizId) {
        quiz = await rand_select_one()
    } else {
        if (!isUUID(res.quizId)) return responseJson(404)
        quiz = await select({ id: res.quizId })
    }
    //Questionを作成
    const result = await create(uid, quiz[0].id)

    return responseJson(200, result)
}

