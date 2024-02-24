import { app } from './server'

app.listen(
  {
    port: 8080,
    host: '127.0.0.1',
  },
  () => {
    console.log('🚀 Server running at port 8080')
  },
)

app.get('/', (request, reply) => {
  reply.send('Worked')
})
