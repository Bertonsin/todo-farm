import { env } from './env'
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

app.get('/', (request, reply) => {
  reply.send('Worked')
})
