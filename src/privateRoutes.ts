import { Router } from "express";
import GetAllCard from "./useCases/Card/GetAllCard";
import CreateCard from "./useCases/Card/CreateCard";
import isAuthenticated from './middleware/IsAuthenticated';
const router = Router();


router.get("/cards", isAuthenticated.handle, GetAllCard.handle);
router.post("/cards", isAuthenticated.handle, CreateCard.handle);
export default router;