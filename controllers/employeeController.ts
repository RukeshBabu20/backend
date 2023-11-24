import { NextFunction, Response, Request } from "express";
import * as employeeService from "../services/employeeService";

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputdata = req.body;
  try {
    const employees = await employeeService.createEmployee(inputdata);
    res.status(200).json(employees);
  } catch (error) {
    res.status(401).json({ message: "invalid input. please try again." });
  }
};

export const getAllEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employees = await employeeService.showEmployee();
    if (employees) {
      res.status(200).json(employees);
    } else {
      res.status(404).json({ message: "not found." });
    }
  } catch (error) {
    res.status(404).json({ message: "Invalid request" });
  }
};

export const GetByIdEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  try {
    const employees = await employeeService.showByIdEmployee(userId);
    if (!employees) {
      res.status(400).json({ message: "No data found." });
    } else {
      res.status(200).json(employees);
    }
  } catch (error) {
    res.status(404).json({ message: "Invalid request." });
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const employees = await employeeService.updateIdEmployee(
      userId,
      updateData
    );
    if (!employees) {
      res.status(404).json({ message: "no data found" });
    } else {
      res
        .status(200)
        .json({ message: "updated successfully", data: updateData });
    }
  } catch (error) {
    res.status(401).json({ message: "invalid request" });
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  try {
    const employees = await employeeService.deleteEmployeee(userId);
    if (!employees) {
      res.status(404).json({ message: "no data found" });
    } else {
      res.status(200).json({ message: "deleted successfully." });
    }
  } catch (error) {
    res.status(404).json({ message: "invalid request" });
  }
};
