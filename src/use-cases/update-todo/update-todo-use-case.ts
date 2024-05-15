import { Prisma } from '@prisma/client'
import { TodoRepository } from '../../repositories/todoRepository'
import { NotFoundTodoError } from '../../errors/todo/notFound'
export class CheckTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  async execute(id: string, data: Prisma.TodoUpdateInput) {
    const todo = await this.todoRepository.findById(id)
    if (!todo) throw new NotFoundTodoError()
    await this.todoRepository.update(id, data)
  }
}
