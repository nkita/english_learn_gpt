import { responseJson } from '@/lib/response'
import sessionUID from '@/lib/session'
import { select as u_select } from '@/db/user'
import { select as q_select } from '@/db/questions'

export const GET = async () => {
    const guest_oneday_limit = 5;
    const user_oneday_limit = 10;

    const uid = await sessionUID()
    const u_record = await u_select({ id: uid })

    const isGuest = u_record.length === 0 ? true : false

    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

    const t_record = await q_select({
        user_id: uid,
        status: 'Completed',
        create_at: {
            gte: startOfDay,
            lte: endOfDay
        },
    })

    const response = {
        count: {
            now: t_record.length,
            limit: isGuest ? guest_oneday_limit : user_oneday_limit
        }
    }
    return responseJson(200, response)
}
export const POST = async () => responseJson(405)

