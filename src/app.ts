import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/students.route";

// Get environment configuration
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})