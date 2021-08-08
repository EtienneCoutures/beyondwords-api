import { Express, Request, Response } from 'express';

export function initRoutes(app: Express) {
    app.get('/', (req: Request, res: Response) => res.status(200).send({
        message: 'Hello'
      }))
}