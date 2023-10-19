import { responseJson } from '@/lib/response'
import { select, rand_select_one } from '@/db/quizzes'
import { create, select_on_quiz, update } from '@/db/questions'
import { get_level_number, isUUID, validations } from '@/lib/util'
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
    if (!record) return responseJson(400)
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
 * Questionのquizを変更
 * 進捗が0の場合のみ変更可能（実装簡略化のためフロントのみで制御 TODO）
 * @param quizId クイズIDが渡された場合はそのまま作成
 * @returns question JSON Object（新規作成されたQuestionを返却する）
 */
export async function POST(request: Request, { params }: { params: any }) {
    if (!isUUID(params.question_id)) return responseJson(422)
    const uid = await sessionUID()
    const record = await select_on_quiz({ id: params.question_id, user_id: uid })
    if (!record) return responseJson(400)
    const q_status = record.status
    if (q_status !== 'Inprogress') return responseJson(400)

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

    const data = await update_question(uid, params.question_id, level, type, random, quizId)

    return data ? responseJson(200, data) : responseJson(404)
}



const update_question = async (uid: string, qid: string, level: string, type: number, random: boolean, quizId?: string) => {
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
    return await update({ quiz_id: quiz[0].id }, { id: qid, user_id: uid })
}