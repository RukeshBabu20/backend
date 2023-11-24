import express from "express";
import dbConnection from "./database/dbConnection";
import employeeRoute from "./routes/employeeRoute";
import studentRoute from "./routes/studentRoutes";
import cors from "cors";
const app = express();
const PORT = 5000;

dbConnection();

app.use(express.json());
app.use(cors());

app.use("/employee", employeeRoute);
app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
