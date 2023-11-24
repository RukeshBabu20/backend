import { employeeType } from "../types/employeeTypes";
import employeeModel from "../models/employeeModel";

export const createEmployee = async (user: employeeType) => {
  return await employeeModel.create(user);
};

export const showEmployee = async () => {
  return await employeeModel.find();
};

export const showByIdEmployee = async (userId: string) => {
  return await employeeModel.findById(userId);
};

export const updateIdEmployee = async (
  userId: string,
  updateData: employeeType
) => {
  return await employeeModel.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
};

export const deleteEmployeee = async (userId: string) => {
  return await employeeModel.findByIdAndDelete(userId);
};
