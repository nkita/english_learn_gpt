import OpenAI from "openai";

// GPT　answer
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const userType2 = (question: string, answer: string) => `
### 日本語 ###
${question}
### 英語 ###
${answer}
`
export const systemType2 = `
与えられた日本語と英語より日本語から英語への翻訳が適切か0点から100点の間より採点してください。
質問とは関係のない文章また理解できない文字列の場合は0点
回答として適切かどうか200文字程度でアドバイスすること。
回答例も合わせて提示すること。
`

export const functions = [{
    "name": "score_advice",
    "description": "与えられた文章を評価点、アドバイス・評価・ヒント、解答例の3に分割する。元の文章は絶対に変更しないこと。",
    "parameters": {
        "type": "object",
        "properties": {
            "score": {
                "type": "number",
                "description": "点数.0点から100点の間。"
            },
            "advice": {
                "type": "string",
                "description": "アドバイス・評価・ヒント"
            },
            "example": {
                "type": "string",
                "description": "解答例または回答例"
            }
        },
        "required": [
            "score",
            "advice"
        ]
    }
}]



export const userType1 = (question: string, answer: string) => `
### 質問 ###
${question}
### 回答 ###
${answer}
`
export const systemType1 = `
与えられた質問（日本語または英語）に対して、英語の回答が適切かどうか0点から100点の間より採点してください。
質問とは関係のない文章また理解できない文字列の場合は0点
回答として適切かどうか200文字程度でアドバイスすること。
回答例も合わせて提示すること。
`
