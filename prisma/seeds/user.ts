import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
import { create } from '../helper'
// 创建prisma对象
export async function User() {
  create(100, async (prisma: PrismaClient) => {  
    await prisma.user.create({
        data:{
            email:Random.email(),
            password:Random.string(),
            github:Random.url(),
            avatar:Random.image("300*300")
        }
    })
  })
}
