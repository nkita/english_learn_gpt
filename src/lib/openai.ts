import OpenAI from "openai";

// GPT　answer
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const userType1 = (question: string, answer: string) => `
### 日本語 ###
${question}
### 英語 ###
${answer}
`
export const systemType1 = `
あたえられた日本語と英語より、日本語から英語への翻訳が適切か下記観点を元に採点し、アドバイス・評価してください。
英語文章が未完成、または全く関係のない英文の場合は、0点としてください。
解答例も提示してください。
評価内容は観点の内容をそのまま記載しないこと。

### 観点 ###
- 100点:適切な文法・語彙・時制が使用され、翻訳も正しく、自然な英語表現となっている。
- 90点:適切な文法・語彙・時制が使用され、正しい翻訳となっている。
- 80点:適切な文法・語彙・時制が使用され、意味は通じる翻訳となっている。
- 70点:適切な文法・語彙・時制が一部正しく、意味は通じる翻訳となっている。
- 60点:適切な文法・語彙・時制が一部正しく、一部のみ意味は通じる翻訳となっている。
- 50点:文法・語彙・時制は正しくないが、一部のみ意味は通じる翻訳となっている。
- 40点:文法・語彙・時制は正しくなく、翻訳も適切でない。
- 10点:英文が未完成
- 0点:英語文章が未完成または、関係ない英語文章が記載されている。
`

export const functions = [{
    "name": "score_advice",
    "description": "与えられた文章を評価点、アドバイス・評価、解答例の3に分割する。元の文章は絶対に変更しないこと。",
    "parameters": {
        "type": "object",
        "properties": {
            "score": {
                "type": "number",
                "description": "点数.0点から100点の間。"
            },
            "advice": {
                "type": "string",
                "description": "アドバイス・評価"
            },
            "example": {
                "type": "string",
                "description": "解答例。該当箇所がなければnull"
            }
        },
        "required": [
            "score",
            "advice"
        ]
    }
}]