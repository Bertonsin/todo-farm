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
    const currentTodo = await this.findById(id)
    for (const iterator in Object(currentTodo)) {
      if (Object(todo)[iterator] !== Object(currentTodo)[iterator]) {
        Object(currentTodo)[iterator] = Object(todo)[iterator]
      }
    }
  }

  async findById(id: string) {
    const todo = this.todos.find((todo) => todo.id === id)
    if (!todo) return null
    return todo
  }
}
