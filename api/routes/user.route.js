import express from 'express';
import { updatedUser } from '../controller/user.controller.js';
import {verifyToken} from '../utils/verifyUser.js'


const router = express.Router();


router.post('/update/:id',verifyToken,updatedUser )

export default router;