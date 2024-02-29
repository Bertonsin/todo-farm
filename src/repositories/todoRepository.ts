import { Prisma, Todo } from '@prisma/client'

export interface TodoRepository {
  create: (todo: Prisma.TodoCreateInput) => { id: string }
  getList: () => { data: Todo[] }
}
