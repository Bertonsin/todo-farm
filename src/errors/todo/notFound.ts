export class NotFoundTodoError extends Error {
  constructor() {
    super('Todo não encontrado!')
  }
}
