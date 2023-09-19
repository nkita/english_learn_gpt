import prisma from "@/db/prisma";

export const select = async (where: any) => await prisma.quizzes.findMany({ where: where })

export const rand_select_one = async () => await prisma.$queryRaw`
SELECT
    *
FROM
    Quizzes
ORDER BY
    RAND()
LIMIT
    1
`