import { employeeType } from "../types/employeeTypes";
import employeeModel from "../models/employeeModel";

export const createEmployee = async (user: employeeType) => {
  const employees = employeeModel.create(user);
  return employees;
};

export const showEmployee = async () => {
  return employeeModel.find();
};

export const showByIdEmployee = async (userId: string) => {
  return employeeModel.findById(userId);
};

export const updateIdEmployee = async (
  userId: string,
  updateData: employeeType
) => {
  return employeeModel.findByIdAndUpdate(userId, updateData, { new: true });
};

export const deleteEmployeee = async (userId: string) => {
  return employeeModel.findByIdAndDelete(userId);
};
