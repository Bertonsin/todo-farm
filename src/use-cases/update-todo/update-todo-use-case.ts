import { Prisma } from '@prisma/client'
import { TodoRepository } from '../../repositories/todoRepository'
export class CheckTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  async execute(id: string, data: Prisma.TodoUpdateInput) {
    const todo = this.todoRepository.findById(id)
    if (!todo) throw new Error()
    await this.todoRepository.update(id, data)
  }
}
