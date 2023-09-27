import OpenAI from "openai";

// GPT　answer
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const messageType1 = (question: string, answer: string) => `
あなたは英語の翻訳者です。{sentence 1}の英語翻訳が{sentence 2}で適切か下記観点を元に評価した内容を要約し、採点とアドバイスのみをしてください。
文章が未完成、または全く関係のない英文の場合は、F点としてください。

sentence 1
${question}

sentence 2
${answer}

観点
Fが最低点、Sが最高得点
-S:ネイティブにも伝わる適切な表現となっている。
-A:全文の翻訳できている
-B:一部のみ翻訳できている
-C:意味が通じない
`
