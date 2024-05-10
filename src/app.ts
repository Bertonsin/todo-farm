import { env } from './env'
import { TodoRoutes } from './http/todo'
import { app } from './server'

app.listen(
  {
    port: env.PORT,
    host: '127.0.0.1',
  },
  () => {
    console.log('🚀 Server running at port 8080')
  },
)

app.register(TodoRoutes)
