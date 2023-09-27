import { responseJson } from '@/lib/response'
import { select, create } from '@/db/talklog'
import { select_on_quiz } from '@/db/questions'
import { isUUID } from '@/lib/util'
import sessionUID from '@/lib/session'
import { isEnglishChars, sleep } from '@/lib/util';
import { openai, messageType1 } from '@/lib/openai'
/**
 * Questionの取得。
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function GET(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)

    const uid = await sessionUID()
    const record = await select({ question_id: params.question_id, user_id: uid }, [{ create_at: 'asc' }])

    if (record.length === 0) return responseJson(200)

    return responseJson(200, record)
}

/**
 * TalkLogの追加
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)
    const uid = await sessionUID()
    const req = await request.json()
    if (!isEnglishChars(req.data)) return responseJson(400)
    create(params.question_id, uid, 'user', { content: req.data })

    const q = await select_on_quiz({ id: params.question_id })
    if (!q) return responseJson(400)
    // GPT　answer
    openai.chat.completions.create({
        messages: [{
            "role": "user", "content": messageType1(q.quiz.content, req.data)
        }],
        model: "gpt-3.5-turbo",
    }).then(result => {
        create(params.question_id, uid, 'ai', { content: result.choices[0].message.content })
    })

    return responseJson(200)
}

