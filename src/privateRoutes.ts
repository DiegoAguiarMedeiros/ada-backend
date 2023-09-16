import { Router } from "express";
import GetAllCard from "./useCases/Card/GetAllCard";
import isAuthenticated from './middleware/IsAuthenticated';
const router = Router();


router.get("/cards", isAuthenticated.handle, GetAllCard.handle);
export default router;