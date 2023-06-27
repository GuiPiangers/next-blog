// http://localhost:3000/api/revalidate?path=/&secret=GuilhermeCode

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  resp: NextApiResponse,
) {
  if (req.query.secret !== process.env.MY_TOKEN) {
    return resp.status(401).json({ message: 'Invalid token' })
  }

  const path = req.query.path as string

  await resp.revalidate(path)

  return resp.json({ revalidated: true })
}
