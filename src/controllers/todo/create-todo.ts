import { Prisma } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { TodoPrismaRepository } from '../../repositories/todo/prisma'
import { CreateTodoUseCase } from '../../use-cases/create-todo/create-todo-use-case'
import { ServerTodoError } from '../../errors/todo/serverError'

export async function CreateTodoController(
  req: FastifyRequest<{ Body: Prisma.TodoCreateInput }>,
  reply: FastifyReply,
) {
  try {
    const todoRepository = new TodoPrismaRepository()
    const useCase = new CreateTodoUseCase(todoRepository)
    const { id } = await useCase.execute(req.body)
    reply.send({ id })
  } catch (error) {
    reply.send('Erro no servidor!').status(500)
    throw new ServerTodoError()
  }
}
