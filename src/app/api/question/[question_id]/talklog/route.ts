import { responseJson } from '@/lib/response'
import { select } from '@/db/talklog'
import { isUUID } from '@/lib/util'
import sessionUID from '@/lib/session'



/**
 * Questionの取得。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function GET(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)

    // 用セッションチェック
    const uid = await sessionUID()
    const record = await select({ id: params.question_id, user_id: uid }, [{ create_at: 'desc' }])

    if (record.length === 0) return responseJson(400)

    return responseJson(200, record)
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

