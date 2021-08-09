import { Express, Request, Response } from 'express';
import * as UserRoutes from './user.route';

export function initRoutes(app: Express) {
  app.get('/', (req: Request, res: Response) => res.status(200).send({
    message: 'Hello'
  }))

  UserRoutes.routes(app)
}