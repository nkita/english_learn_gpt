import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { create, select_on_quiz } from '@/db/questions'
import { isUUID } from '@/lib/util'
import { guestId } from '@/lib/guest'
import { getServerSession } from "next-auth/next"
import { nextAuthOptions } from '@/lib/nextAuthOptions'


/**
 * Questionの取得。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function GET(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)
    // 用セッションチェック

    return responseJson(200)
}

/**
 * Questionの作成。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request) {
    if (request.headers.get('content-type') !== 'application/json') return responseJson(400)


    return responseJson(200)
}

