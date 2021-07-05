import express, { Application } from "express";
import config from "./config";

const port: number = config.port;
const app: Application = express();

app.listen(port, () => console.log(`Listening on port ${port}`));