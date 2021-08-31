import * as uuid from 'uuid'
import { Unit } from '../models/unit.model'

export function findAll(): Promise<any> {
  return Unit.findAll()
}
