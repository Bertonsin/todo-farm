import { Prisma } from '@prisma/client'

export interface TodoRepository {
  create: (todo: Prisma.TodoCreateInput) => { id: string }
}
