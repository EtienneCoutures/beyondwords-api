import * as uuid from 'uuid'
import { Categorie } from '../models/categorie.model'

export function findAll(): Promise<any> {
  return Categorie
    .findAll()
}