import mongoose, { Schema } from "mongoose";
import { employeeType } from "../types/employeeTypes";
import { kStringMaxLength } from "buffer";

const employeeSchema: Schema<employeeType> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  present: {
    type: Boolean,
    required: true,
  },
});

const employeeModel = mongoose.model<employeeType>("employees", employeeSchema);
export default employeeModel;
