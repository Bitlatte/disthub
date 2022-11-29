import express, { Application } from "express";
import AppRouter from "../routes";

const App: Application = express();

App.use("/", AppRouter);

export default App;
