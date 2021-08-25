import { Request, Response } from 'express'
import { UserFunction } from '../../functions/index'

export function login(req: Request, res: Response) {
    console.log("Login controller: ", req)
    return UserFunction
    .login({ email: req.body.email, password: req.body.password })
    .then(users => res.status(200).send(users))
    .catch(error => { return error })
}