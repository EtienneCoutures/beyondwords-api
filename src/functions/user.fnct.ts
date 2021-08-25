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
    }).then(user => { return user }).catch(err => { return err })
}

export function findAll(): Promise<any> {
  console.log("User controller")
  return User
    .findAll({ include: [{ all: true }] })
}

export function login(user: { email: string, password: string }): Promise<any> {
  let test = User
  .findOne({
    where: {
      email: user.email,
      password: user.password
    }
  })
  console.log("test login : ", test)
  return test;
}