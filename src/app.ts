import express from "express";
import { AppRoutes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
AppRoutes(app);
export default app;
