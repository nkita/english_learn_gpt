export const isUUID = (value: string) => /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/.test(value);
export const isNumber = (value: string) => /^[0-9]+$/.test(value);
export const isChars = (value: string) => /^[0-9a-zA-Z]+$/.test(value);
export const isEnglishChars = (value: string) => /^[ -~\r\n]*$/.test(value);
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

export const yyyymmddhhmm = new Intl.DateTimeFormat(
    'ja-JP',
    {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }
)

export const serverlog = (msg: string, type = "info") => console.log(`[${type}] ${yyyymmddhhmmss.format(new Date())} ${msg}`)
export const randomStr = () => Math.random().toString(36).slice(2)


export const get_color_sets = (value: number | string | null | undefined) => {
    const default_set = { score: [], bg: 'red.500', bcolor: 'red.500', color: 'white', face: '🐶' }
    if (value === undefined || value === null) return default_set

    const color_sets = [
        { score: [0, 20], bg: 'gray.500', bcolor: 'gray.500', color: 'white', face: '😱' },
        { score: [21, 40], bg: 'cyan.500', bcolor: 'cyan.500', color: 'white', face: '😣' },
        { score: [41, 60], bg: 'purple.500', bcolor: 'purple.500', color: 'white', face: '😄' },
        { score: [61, 80], bg: 'green.500', bcolor: 'green.500', color: 'white', face: '😄' },
        { score: [81, 99], bg: 'yellow.500', bcolor: 'yellow.500', color: 'white', face: '😆' },
        { score: [100, 100], bg: 'red.500', bcolor: 'red.500', color: 'white', face: '😍' },
    ]

    let _score = 0;
    if (typeof value === "string") {
        switch (value) {
            case 'S':
                _score = 100
                break;
            case 'A':
                _score = 99
                break;
            case 'B':
                _score = 80
                break;
            case 'C':
                _score = 70
                break;
            case 'F':
                _score = 0
                break;
            default:
                _score = 50

        }
    } else {
        _score = value
    }
    const colors = color_sets.filter(cs => (cs.score[0] <= _score && _score <= cs.score[1]))[0]
    return colors === undefined ? default_set : colors
}


export const get_level_sets = (value: number | null | undefined) => {
    const default_set = { level: [], colorScheme: 'cyan', label: 'Normal Lv' }
    if (value === undefined || value === null) return default_set

    const level_sets = [
        { level: [0, 1], colorScheme: 'green', label: 'Beginner Lv' },
        { level: [2, 3], colorScheme: 'blue', label: 'Low Lv' },
        { level: [4, 4], colorScheme: 'orange', label: 'Medium Lv' },
        { level: [5, 5], colorScheme: 'red', label: 'High Lv' },
    ]

    const sets = level_sets.filter(ls => (ls.level[0] <= value && value <= ls.level[1]))[0]
    return sets === undefined ? default_set : sets
}