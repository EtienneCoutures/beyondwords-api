import { Express } from 'express'
import { UserController } from '../controllers/index'
import passport from 'passport'


export function routes(app: Express) {

  app.get('/api/users', UserController.UserGet.list)
  app.get('/api/users/:usr_id/categories', UserController.UserGet.categories)



  app.post('/api/login', passport.authenticate('session', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), UserController.UserLogin.login);
  
}

