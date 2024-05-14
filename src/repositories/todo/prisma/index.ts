import { Prisma } from '@prisma/client'
import { TodoRepository } from '../../todoRepository'
import { prisma } from '../../../prisma'

export class TodoPrismaRepository implements TodoRepository {
  async create(todo: Prisma.TodoCreateInput) {
    const { id } = await prisma.todo.create({ data: todo })
    return { id }
  }

  async getList() {
    const todo = await prisma.todo.findMany()

    return { data: todo }
  }

  async update(id: string, todo: Prisma.TodoUpdateInput) {
    await prisma.todo.update({ where: { id }, data: todo })
  }

  async findById(id: string) {
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    })
    return todo
  }
}
