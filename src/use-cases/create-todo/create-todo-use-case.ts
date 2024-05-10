import { Prisma } from '@prisma/client'
import { TodoRepository } from '../../repositories/todoRepository'

type CreateTodoUseCaseInput = Prisma.TodoCreateInput

type CreateTodoUseCaseOutput = {
  id: string
}

export class CreateTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  async execute(
    todo: CreateTodoUseCaseInput,
  ): Promise<CreateTodoUseCaseOutput> {
    const { id } = await this.todoRepository.create(todo)

    return {
      id,
    }
  }
}
