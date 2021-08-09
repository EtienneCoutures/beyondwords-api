import * as uuid from 'uuid'
import { User } from '../models/user.model'

export function create(user: User): Promise<any> {
      return User
        .create({
          id: uuid.v1(),
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          address: user.address,
          password: user.password,
        }).then(user => {return user}).catch(err => { return err })
}

export function findAll(): Promise<any> {
  return User
    .findAll({ include: [{ all: true }] })
}

export function login(user: any): Promise<any> {
  return User
    .findOne({
      where: {
        email: user.email,
        password: user.user
      }
    })
}