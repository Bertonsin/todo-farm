import { expect, beforeEach, describe, it } from 'vitest'
import { InMemoryTodoRepository } from '../../repositories/todo/in-memory/todo-in-memory-repository'
import { CreateTodoUseCase } from './create-todo-use-case'

describe('Create todo', () => {
  let todoRepository: InMemoryTodoRepository
  let sut: CreateTodoUseCase
  beforeEach(() => {
    todoRepository = new InMemoryTodoRepository()
    sut = new CreateTodoUseCase(todoRepository)
  })

  it('should be able to create a todo', async () => {
    const todo = await sut.execute({
      id: 'my-todo-id',
      name: 'My first todo',
      description: 'This is my first todo!',
    })

    expect(todo.id).toEqual(expect.any(String))
    expect(todoRepository.todos).toHaveLength(1)
  })
})
