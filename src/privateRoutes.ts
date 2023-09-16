import { Router } from "express";
import GetAllCard from "./useCases/Card/GetAllCard";
import CreateCard from "./useCases/Card/CreateCard";
import UpdateCard from "./useCases/Card/UpdateCard";
import DeleteCard from "./useCases/Card/DeleteCard";
import isAuthenticated from './middleware/IsAuthenticated';
import logEndpointUsage from './middleware/LogEndpointUsage';
const router = Router();


router.get("/cards", logEndpointUsage,isAuthenticated.handle, GetAllCard.handle);
router.post("/cards", logEndpointUsage,isAuthenticated.handle, CreateCard.handle);
router.put("/cards/:cardId", logEndpointUsage,isAuthenticated.handle, UpdateCard.handle);
router.delete("/cards/:cardId", logEndpointUsage,isAuthenticated.handle, DeleteCard.handle);
export default router;