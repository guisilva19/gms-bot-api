import { Router } from "express";

const routes = Router();

export const userRouter = () => {
  routes.get("", (req, res) => {
    res.send("Hello World!");
  });

  return routes;
};
