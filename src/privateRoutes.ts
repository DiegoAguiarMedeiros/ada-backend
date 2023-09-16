import { Router } from "express";
import GetAllCard from "./useCases/Card/GetAllCard";
import CreateCard from "./useCases/Card/CreateCard";
import UpdateCard from "./useCases/Card/UpdateCard";
import DeleteCard from "./useCases/Card/DeleteCard";
import isAuthenticated from './middleware/IsAuthenticated';
const router = Router();


router.get("/cards", isAuthenticated.handle, GetAllCard.handle);
router.post("/cards", isAuthenticated.handle, CreateCard.handle);
router.put("/cards/:cardId", isAuthenticated.handle, UpdateCard.handle);
router.delete("/cards/:cardId", isAuthenticated.handle, DeleteCard.handle);
export default router;