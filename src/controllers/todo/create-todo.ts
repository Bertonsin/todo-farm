import { Prisma } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { TodoPrismaRepository } from '../../repositories/todo/prisma'
import { CreateTodoUseCase } from '../../use-cases/create-todo/create-todo-use-case'

export async function CreateTodoController(
  req: FastifyRequest<{ Body: Prisma.TodoCreateInput }>,
  reply: FastifyReply,
) {
  const todoRepository = new TodoPrismaRepository()
  const useCase = new CreateTodoUseCase(todoRepository)
  const { id } = await useCase.execute(req.body)
  reply.send({ id })
}
