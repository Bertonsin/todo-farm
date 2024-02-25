import { z } from 'zod'
export const envSchema = z.object({
  NODE_ENV: z.string().default('dev'),
  PORT: z.coerce.number().default(8080),
})

const envParse = envSchema.safeParse(process.env)

if (!envParse.success) {
  throw new Error('Missing env variables.' + envParse.error)
}

export const env = envParse.data
