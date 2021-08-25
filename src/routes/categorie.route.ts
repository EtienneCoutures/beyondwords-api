import { Express } from 'express'
import { CategorieController } from '../controllers/index'

export function routes(app: Express) {

  app.get('/api/categories', CategorieController.CategorieGet.list)
  //app.post('/api/appUsers', UserController.UserGet.create)
  //app.post('/api/appUsers/login', UserController.UserGet.login)
}