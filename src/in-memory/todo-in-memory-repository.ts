import { Prisma, Todo } from '@prisma/client'
import { TodoRepository } from '../repositories/todoRepository'

export class InMemoryTodoRepository implements TodoRepository {
  todos: Todo[] = []
  create(todo: Prisma.TodoCreateInput) {
    const id = todo.id ?? 'in-memory-id'
    this.todos.push({
      id,
      created_at: new Date(todo.created_at ?? new Date()),
      description: todo.description,
      done: todo.done ?? false,
      name: todo.name,
      updated_at: new Date(todo.updated_at ?? new Date()),
    })

    return {
      id,
    }
  }

  getList() {
    return {
      data: this.todos,
    }
  }
}
