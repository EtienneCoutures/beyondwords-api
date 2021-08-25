import { Request, Response } from 'express'
import { CategorieFunction } from '../../functions/index'

export function list(req: Request, res: Response) {
  return CategorieFunction
    .findAll()
    .then(users => res.status(200).send(users))
    .catch(error => { return error })
}