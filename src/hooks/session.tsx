import { useSession } from "next-auth/react";

export const useUser = (): null | SessionUser => {
    const { data: session } = useSession();
    const user = session?.user
    if (user == undefined) {
        return null
    }
    if (user.name === undefined) user.name = null
    if (user.email === undefined) user.email = null
    if (user.image === undefined) user.image = null
    return user
}

export type SessionUser = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}