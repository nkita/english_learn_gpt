import OpenAI from "openai";

// GPT　answer
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const messageType1 = (question: string, answer: string) => `
あなたは英語の翻訳者です。{日本語文章}の英語翻訳が{回答文}で適切か下記観点を元に評価してください。
文章が未完成、または全く関係のない英文の場合は、0点としてください。

日本語文章
${question}

回答文
${answer}

観点
0が最低点、100が最高得点
100点:ネイティブにも伝わる適切な表現となっている。
80点から99点:全文の翻訳できている
60点から79点〜:一部のみ翻訳できている
10点から59点:意味が通じない
`

export const functions = [{
    "name": "score_advice",
    "description": "文章を点数と評価内容と解答例の3に分割する。元の文章は絶対に変更しないこと。",
    "parameters": {
        "type": "object",
        "properties": {
            "score": {
                "type": "number",
                "description": "点数。最低0、最高100　※必須"
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