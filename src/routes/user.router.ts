import * as controller from "../controllers/user.controller";
import { Router, Request, Response } from "express";

const router = Router();

router.post("/create", (req: Request, res: Response) => {
  controller
    .create(req.body)
    .then(() => {
      res.status(200).send({ status: "ok" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error" });
    });
});

router.get("/:id", (req: Request, res: Response) => {
  controller
    .findById(req.params.id)
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error" });
    });
});

router.post("/:id", (req: Request, res: Response) => {
  controller
    .update(req.params.id, req.body)
    .then(() => {
      res.status(200).send({ status: "ok" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error" });
    });
});

router.post("/:id/remove", (req: Request, res: Response) => {
  controller
    .remove(req.params.id)
    .then(() => {
      res.status(200).send({ status: "ok" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error" });
    });
});

export default router;
