import { Request, Response } from 'express'
import { CategorieFunction } from '../../functions/index'

export function list(req: Request, res: Response) {
  return CategorieFunction
    .findAll()
    .then(users => res.status(200).send(users))
    .catch(error => { return error })
}

export function one(req: Request, res: Response) {
  console.log("le param :", req.params.cat_id)
  return CategorieFunction
    .getCatById(Number(req.params.cat_id))
    .then(cat => res.status(200).send(cat))
    .catch(error => { return error })
}

export function units(req: Request, res: Response) {
  return CategorieFunction
    .getUnitsByCatId(Number(req.params.cat_id))
    .then(units => res.status(200).send(units))
    .catch(error => { return error })
}
