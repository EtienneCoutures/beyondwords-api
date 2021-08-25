import { Express } from 'express'
import { UserController } from '../controllers/index'
import passport from 'passport'


export function routes(app: Express) {

  app.get('/api/users', UserController.UserGet.list)
  app.post('/api/login', UserController.UserLogin.login);
  //app.post('/api/appUsers', UserController.UserGet.create)
  //app.post('/api/appUsers/login', UserController.UserGet.login)
}


// passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' })