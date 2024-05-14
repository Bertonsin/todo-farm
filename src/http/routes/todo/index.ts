import { FastifyInstance } from 'fastify'
import { CreateTodoController } from '../../../controllers/todo/create-todo'
import { getTodoController } from '../../../controllers/todo/get-todo'
import { UpdateTodoController } from '../../../controllers/todo/update-todo'

export async function TodoRoutes(app: FastifyInstance) {
  app.post('/', CreateTodoController)
  app.get('/', getTodoController)
  app.patch('/:id', UpdateTodoController)
}
