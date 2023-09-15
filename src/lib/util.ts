export const isUUID = (value: string) => /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/.test(value);
export const isNumber = (value: string) => /^[0-9]+$/.test(value);
export const isChars = (value: string) => /^[0-9a-zA-Z]+$/.test(value);
export const isEnglishChars = (value: string) => /^[ -~]*$/.test(value);
export const isEmail = (value: string) => /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+$/.test(value);
export const encodeJsonString = (value: string) => new TextEncoder().encode(JSON.stringify(value))
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))
export const fetchWithToken = (url: string, token: string) => fetch(url, { headers: { 'Authorization': 'Bearer ' + token } })
export const validation = (target: string, value: string) => {
    if (!value || value === undefined) return false
    switch (target) {
        case 'token':
            if (!isUUID(value)) return false
            break;
        case 'character_code':
            if (value !== 'Shift_JIS' && value !== 'utf-8') return false
            break;
        case 'export_type':
            if (value !== 'simple' && value !== 'detail') return false
            break;
        case 'order':
            if (value !== 'create' && value !== 'recreate' && value !== 'cancel') return false
            break;
        case 'character':
            if (!isChars(value)) return false
            break;
        case 'number':
            if (!isNumber(value)) return false
            break;
        case 'email':
            if (!isEmail(value)) return false
            break;
    }
    return true
}
export const validations = (targets: [{ target: string, value: string }]) => {
    let r = true
    for (const t of targets) {
        if (!validation(t.target, t.value)) {
            r = false
            break;
        }
    }
    return r
}
export const yyyymmddhhmmss = new Intl.DateTimeFormat(
    'ja-JP',
    {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
)

export const serverlog = (msg: string, type = "info") => console.log(`[${type}] ${yyyymmddhhmmss.format(new Date())} ${msg}`)
