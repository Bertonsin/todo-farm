import { Prisma, Todo } from '@prisma/client'

export interface TodoRepository {
  create: (todo: Prisma.TodoCreateInput) => Promise<{ id: string }>
  getList: () => Promise<{ data: Todo[] }>
  update: (id: string, todo: Prisma.TodoUpdateInput) => Promise<void>
  findById: (id: string) => Promise<Todo | null>
}
