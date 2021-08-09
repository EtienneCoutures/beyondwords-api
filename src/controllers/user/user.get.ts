import { Request, Response } from 'express'
import { UserFunction } from '../../functions/index'

export function list(req: Request, res: Response) {
  return UserFunction
    .findAll()
    .then(users => res.status(200).send(users))
    .catch(error => { return error })
}