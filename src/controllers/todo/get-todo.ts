import { Prisma } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { TodoPrismaRepository } from '../../repositories/todo/prisma'
import { ViewTodoUseCase } from '../../use-cases/view-todo/view-todo-use-case'
import { ServerTodoError } from '../../errors/todo/serverError'

export async function getTodoController(
  req: FastifyRequest<{ Body: Prisma.TodoCreateInput }>,
  reply: FastifyReply,
) {
  try {
    const todoRepository = new TodoPrismaRepository()
    const useCase = new ViewTodoUseCase(todoRepository)
    const { data } = await useCase.execute()
    return reply.send(data)
  } catch (error) {
    reply.send('Erro no servidor!').status(500)
    throw new ServerTodoError()
  }
}
