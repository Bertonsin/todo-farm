import { FastifyReply, FastifyRequest } from 'fastify'
import { TodoPrismaRepository } from '../../repositories/todo/prisma'
import { CheckTodoUseCase } from '../../use-cases/check-todo/check-todo-use-case'
import { Prisma } from '@prisma/client'

export async function UpdateTodoController(
  req: FastifyRequest<{ Body: Prisma.TodoCreateInput; Params: { id: string } }>,
  reply: FastifyReply,
) {
  const todoRepository = new TodoPrismaRepository()
  const useCase = new CheckTodoUseCase(todoRepository)
  if (!req.params.id) reply.status(404).send('Todo not found!')
  const data = await useCase.execute(
    req.params.id ?? '',
    req.body.done ?? false,
  )
  reply.send({ ...data })
}
