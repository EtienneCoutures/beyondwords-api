import * as uuid from 'uuid'
import { Categorie } from '../models/categorie.model'
import { User } from '../models/user.model'

export function create(user: User): Promise<User> {
  return User
    .create({
      // id: uuid.v1(),
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      address: user.address,
      password: user.password,
    }).then(user => { return user }).catch(err => { return err })
}

export function findAll(): Promise<User[]> {
  return User
    .findAll({ include: [{ all: true }] })
}

export async function login(user: { email: string, password: string }): Promise<User> {
  return await User
    .findOne({
      where: {
        email: user.email,
        password: user.password
      }
    })
}

export async function getCatByUserId(id: number): Promise<Array<Categorie>> {
  const user = await User.findByPk(id, { include: Categorie });
  const test = await user.getCategories();
  console.log("je retourn : ", test)
  return test;
}