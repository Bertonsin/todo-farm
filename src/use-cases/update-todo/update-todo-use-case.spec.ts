import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTodoRepository } from '../../repositories/todo/in-memory/todo-in-memory-repository'
import { CheckTodoUseCase } from './update-todo-use-case'

describe('Check todo use case', () => {
  let todoRepository: InMemoryTodoRepository
  let sut: CheckTodoUseCase

  beforeEach(() => {
    todoRepository = new InMemoryTodoRepository()
    sut = new CheckTodoUseCase(todoRepository)
  })

  it('should be able to update a todo', async () => {
    todoRepository.create({
      name: 'Exemple',
      description: 'Example text',
      id: 'id-01',
    })
    const updatedTodo = {
      name: 'Example',
      description: 'Example text updated',
      done: true,
    }
    await sut.execute('id-01', updatedTodo)
    expect(todoRepository.todos[0]).toEqual(updatedTodo)
  })

  it('should not be able to update a todo with wrong id', async () => {
    todoRepository.create({
      name: 'Exemple',
      description: 'Example text',
      id: 'id-01',
    })
    const updatedTodo = {
      name: 'Example',
      description: 'Example text updated',
      done: true,
    }
    await sut.execute('id-02', updatedTodo)

    expect(todoRepository.todos[0]).not.toEqual(updatedTodo)
  })
})
