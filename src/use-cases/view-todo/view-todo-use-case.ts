import { Todo } from '@prisma/client'
import { TodoRepository } from '../../repositories/todoRepository'

interface ViewTodoUseCaseResponse {
  data: Todo[]
}

export class ViewTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  async execute(): Promise<ViewTodoUseCaseResponse> {
    const { data } = await this.todoRepository.getList()

    return {
      data,
    }
  }
}
