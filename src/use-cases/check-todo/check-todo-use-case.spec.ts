import { describe, expect, it } from 'vitest'
import { InMemoryTodoRepository } from '../../in-memory/todo-in-memory-repository'
import { CheckTodoUseCase } from './check-todo-use-case'

describe('Check todo use case', () => {
  const todoRepository = new InMemoryTodoRepository()
  const sut = new CheckTodoUseCase(todoRepository)

  it('should be able to check a todo as done', async () => {
    todoRepository.create({
      name: 'Exemple',
      description: 'Example text',
      id: 'id-01',
    })
    const todo = await sut.execute('id-01', true)

    expect(todo?.done).toBe(true)
  })

  it('should be able to check a todo as undone', async () => {
    todoRepository.create({
      name: 'Exemple',
      description: 'Example text',
      id: 'id-01',
    })
    const todo = await sut.execute('id-01', false)

    expect(todo?.done).toBe(false)
  })
})
