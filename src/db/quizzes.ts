import prisma from "@/db/prisma";
import { Prisma } from "@prisma/client";

export const select = async (where: any) => await prisma.quizzes.findMany({ where: where })

export const rand_select_one = async (random: boolean, level: number, type: number) => await prisma.$queryRaw`
SELECT
    *
FROM
    Quizzes
${random ? Prisma.sql` WHERE level=${level} AND quiz_type_id=${type} ` : Prisma.empty}
ORDER BY
    RAND()
LIMIT
    1
`