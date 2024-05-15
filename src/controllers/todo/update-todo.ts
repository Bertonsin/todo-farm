import { FastifyReply, FastifyRequest } from 'fastify'
import { TodoPrismaRepository } from '../../repositories/todo/prisma'
import { CheckTodoUseCase } from '../../use-cases/update-todo/update-todo-use-case'
import { Prisma } from '@prisma/client'
import { ServerTodoError } from '../../errors/todo/serverError'

export async function UpdateTodoController(
  req: FastifyRequest<{ Body: Prisma.TodoCreateInput; Params: { id: string } }>,
  reply: FastifyReply,
) {
  try {
    const todoRepository = new TodoPrismaRepository()
    const useCase = new CheckTodoUseCase(todoRepository)
    const data = await useCase.execute(req.params.id ?? '', req.body)
    reply.send(data)
  } catch (error) {
    reply.send('Erro no servidor!').status(500)
    throw new ServerTodoError()
  }
}
