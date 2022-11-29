import { Router, Request, Response } from "express";
import UserRouter from "./user.router";

const AppRouter = Router();

AppRouter.use("/users", UserRouter);

AppRouter.use("/status", (req: Request, res: Response) => {
  res.status(200).send({ status: "ok" });
});

export default AppRouter;
