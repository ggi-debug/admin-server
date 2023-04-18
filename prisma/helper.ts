import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export async function create(
    count = 1 as number,
    callpack: (prisma: PrismaClient) => void) {
    for (let i = 0; i < count; i++) {
        callpack(prisma)
    }
}
