import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
// 创建prisma对象
import { create } from '../helper'
import _ from 'lodash'
export async function Article() {
  create(100, async (prisma: PrismaClient) => {  
    await prisma.article.create({
        data:{
          title: Random.ctitle(),
          content:Random.cparagraph(10,50),
          categoryId:_.random(1,10),
          thunb:Random.image("300*300")
        }
    })
  })
}

