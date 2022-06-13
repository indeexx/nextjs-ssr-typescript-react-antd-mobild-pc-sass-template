/*
 * @Author: indeex
 * @Date: 2019-05-19 19:58:15
 * @Email: indeex@qq.com
 */
import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/mongodb/connection"
import { ResponseFuncs } from "../../utils/mongodb/types"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  const catcher = (error: Error) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Todo } = await connect()
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      )
      res.json(await Todo.find({}).catch(catcher))
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Todo } = await connect()
      res.json(await Todo.create(req.body).catch(catcher))
    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler