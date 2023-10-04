import prisma from "@/db/prisma";
import { randomUUID } from "crypto";

export const select = async (where: any) => await prisma.user.findMany({ where: where })
