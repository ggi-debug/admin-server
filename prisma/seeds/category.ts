import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
// 创建prisma对象
import { create } from '../helper'

export async function Category() {
 await create(100, async (prisma: PrismaClient) => {
    await prisma.category.create({
      data: {
        title: Random.ctitle(),
      },
    })
  })
}
