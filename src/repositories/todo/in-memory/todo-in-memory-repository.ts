import { Prisma, Todo } from '@prisma/client'
import { TodoRepository } from '../../todoRepository'

export class InMemoryTodoRepository implements TodoRepository {
  todos: Todo[] = []
  async create(todo: Prisma.TodoCreateInput) {
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

  async getList() {
    return {
      data: this.todos,
    }
  }

  async update(id: string, todo: Prisma.TodoUpdateInput) {
    const currentTodo = this.todos.find((item) => item.id === id)
    if (!currentTodo) return null
    for (const iterator in Object(currentTodo)) {
      if (Object(todo)[iterator] !== Object(currentTodo)[iterator]) {
        Object(currentTodo)[iterator] = Object(todo)[iterator]
      }
    }

    return currentTodo
  }
}
