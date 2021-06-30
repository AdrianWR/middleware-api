import express from "express";
import dotenv from "dotenv";
import { studentsRouter } from "./routes/students.route";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { METHODS } from "http";

// Get environment configuration
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(studentsRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

//app.listen(port, () => {
//    console.log(`App listening on port ${port}`);
//})


import { Intra } from "./services/instance.service";

async function get_all_students() {
  try {
    const response = await Intra({
      url: "/v2/users",
      method: "GET",
      headers: { Authorization : `Bearer ${access_token}`}
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}

(async function () {
  const students = await get_all_students();
  console.log(students);
})()