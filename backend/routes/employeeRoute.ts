import express from "express";
const router = express.Router();
import * as employeeController from "../controllers/employeeController";

router.post("/create", employeeController.createEmployee);
router.get("/show", employeeController.getAllEmployee);
router.get("/show/:id", employeeController.GetByIdEmployee);
router.put("/update/:id", employeeController.updateEmployee);
router.delete("/delete/:id", employeeController.deleteEmployee);

export default router;
