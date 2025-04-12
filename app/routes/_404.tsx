import type { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  c.status(404)
  return c.text('404 Not Found')
}

export default handler
