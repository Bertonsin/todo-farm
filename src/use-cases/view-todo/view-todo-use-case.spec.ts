import { Todo } from '@prisma/client'
import { InMemoryTodoRepository } from '../../in-memory/todo-in-memory-repository'
import { describe, expect, it } from 'vitest'
import { ViewTodoUseCase } from './view-todo-use-case'

describe('View todo use case', () => {
  const todoRepository = new InMemoryTodoRepository()
  const sut = new ViewTodoUseCase(todoRepository)

  it('should be able to view todos existent', async () => {
    const { data } = await sut.execute()
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array<Todo>)
  })
})
