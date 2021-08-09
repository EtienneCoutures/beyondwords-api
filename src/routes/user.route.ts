import { Express } from 'express'
import { UserController } from '../controllers/index'

export function routes(app: Express) {

  app.get('/api/users', UserController.UserGet.list)
  //app.post('/api/appUsers', UserController.UserGet.create)
  //app.post('/api/appUsers/login', UserController.UserGet.login)
}