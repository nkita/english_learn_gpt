import { responseJson } from '@/lib/response'
import { select, create } from '@/db/talklog'
import { create as logCreate } from '@/db/tokenslog'
import { select_on_quiz, update } from '@/db/questions'
import { isUUID } from '@/lib/util'
import sessionUID from '@/lib/session'
import { isEnglishChars, sleep } from '@/lib/util';
import { openai, userType1, systemType1, functions } from '@/lib/openai'
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

    const q = await select_on_quiz({ id: params.question_id })
    const response = {
        question_satatus: q?.status,
        logs: record
    }
    return responseJson(200, response)
}

/**
 * TalkLogの追加
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request, { params }: { params: any }) {
    const qid = params.question_id
    if (!isUUID(qid)) return responseJson(422)
    const uid = await sessionUID()
    const req = await request.json()
    if (!isEnglishChars(req.data)) return responseJson(400)
    create(qid, uid, 'user', { content: req.data })

    const q = await select_on_quiz({ id: qid })
    if (!q) return responseJson(400)
    // GPT　answer
    openai.chat.completions.create({
        messages: [
            { "role": "system", "content": systemType1 },
            { "role": "user", "content": userType1(q.quiz.content, req.data) }
        ],
        temperature: 0.1,
        model: "gpt-3.5-turbo",
    }).then(res1 => {
        const res1Usage = res1.usage
        logCreate(uid, res1Usage?.completion_tokens, res1Usage?.completion_tokens, res1Usage?.total_tokens)
        console.log(res1.choices)
        openai.chat.completions.create({
            messages: [
                { "role": "user", "content": res1.choices[0].message.content },
            ],
            functions: functions,
            function_call: "auto",
            temperature: 0,
            model: "gpt-3.5-turbo"
        }).then(res2 => {
            const res2Usage = res2.usage
            logCreate(uid, res2Usage?.completion_tokens, res2Usage?.completion_tokens, res2Usage?.total_tokens)

            const function_call = res2.choices[0].message.function_call
            if (function_call !== undefined && function_call) {
                const functionArgs = JSON.parse(function_call.arguments)
                create(qid, uid, 'ai', { content: functionArgs.advice, score: functionArgs.score, best_answer: functionArgs.example })
            } else {
                create(qid, uid, 'ai', { content: res2.choices[0].message.content })
            }
            update({ status: 'Completed' }, { id: qid })
        })
    }).catch(e => {
        console.error(e.message)
        create(params.question_id, uid, 'ai', { content: "エラーが発生しました。\n お手数ですが、再度回答ください。m(_ _ )m" })
    })

    return responseJson(200)
}

