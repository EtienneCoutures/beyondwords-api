import * as uuid from 'uuid'
import { Categorie } from '../models/categorie.model'
import { Unit } from '../models/unit.model'

export function findAll(): Promise<any> {
  return Categorie
    .findAll()
}

export async function getCatById(id: number): Promise<Categorie> {
  return await Categorie.findByPk(id, { include: Unit });
}

export async function getUnitsByCatId(id: number): Promise<Array<Unit>> {
  const cat = await Categorie.findByPk(id, { include: Unit });
  return cat.getUnits();
}

