import express, { Application, urlencoded, json } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import AppRouter from "../routes";

const App: Application = express();

App.disable("x-powered-by");

App.use(urlencoded({ extended: false }));
App.use(json());
App.use(cors());
App.use(helmet());
App.use(morgan("dev"));

App.use("/", AppRouter);

export default App;
