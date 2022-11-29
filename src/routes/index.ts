import { Router, Request, Response } from 'express';

const AppRouter = Router();

AppRouter.use('/status', (req: Request, res:  Response) => {
    res.status(200).send({ status: 'ok' });
})

export default AppRouter