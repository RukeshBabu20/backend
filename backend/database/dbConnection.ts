import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/backend3")
    .then((conn) => {
      console.log("DB connected.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default dbConnection;
