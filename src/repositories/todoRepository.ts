import { Prisma, Todo } from '@prisma/client'

export interface TodoRepository {
  create: (todo: Prisma.TodoCreateInput) => { id: string }
  getList: () => { data: Todo[] }
  update: (id: string, todo: Prisma.TodoUpdateInput) => Todo | null
}
