import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { file } = req.body
  console.log(req.body);


  res.status(200).json({ name: file })
}