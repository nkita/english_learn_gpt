import OpenAI from "openai";

// GPT　answer
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const userType1 = (question: string, answer: string) => `
日本語
${question}
英語
${answer}
`
export const systemType1 = `
あなたはあたえられた日本語文章と英語文章から、日本語から英語への翻訳が下記観点により適切か評価してください。
英語文章が未完成、または全く関係のない英文の場合は、0点としてください。

観点
0が最低点、100が最高得点
100点:ネイティブにも伝わる適切な表現となっている。
80点:全文の翻訳できている
60点:一部のみ翻訳できている
50点:意味が通じない
`

export const functions = [{
    "name": "score_advice",
    "description": "評価点と評価内容と解答例の3に分割する。元の文章は絶対に変更しないこと。",
    "parameters": {
        "type": "object",
        "properties": {
            "score": {
                "type": "number",
                "description": "評価.0点から100点の間。"
            },
            "advice": {
                "type": "string",
                "description": "評価内容"
            },
            "example": {
                "type": "string",
                "description": "解答例。もしあれば。"
            }
        },
        "required": [
            "score",
            "advice"
        ]
    }
}]