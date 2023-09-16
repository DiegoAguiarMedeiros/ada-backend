import { Router } from "express";
import authenticateUserController from "./useCases/Authenticate";

const router = Router();

router.get('/', (req, res) => {
    res.send('Estamos online!');
});

router.post("/auth", authenticateUserController.handle);
export default router;