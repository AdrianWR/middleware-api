import express, { Application } from "express";
import config from "./config";

const port: number = config.port;
const app: Application = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => console.log(`Listening on port ${port}`));