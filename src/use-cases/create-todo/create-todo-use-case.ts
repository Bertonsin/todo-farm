import { Prisma } from '@prisma/client'
import { TodoRepository } from '../../repositories/todoRepository'

type CreateTodoUseCaseInput = Prisma.TodoCreateInput

type CreateTodoUseCaseOutput = {
  id: string
}

export class CreateTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  execute(todo: CreateTodoUseCaseInput): CreateTodoUseCaseOutput {
    const { id } = this.todoRepository.create(todo)

    return {
      id,
    }
  }
}
