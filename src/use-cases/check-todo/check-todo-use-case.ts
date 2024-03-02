import { TodoRepository } from './../../repositories/todoRepository'
export class CheckTodoUseCase {
  constructor(readonly todoRepository: TodoRepository) {}

  async execute(id: string, done: boolean) {
    const todo = this.todoRepository.update(id, { done })
    return todo
  }
}
