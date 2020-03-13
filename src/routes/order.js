import {Router} from 'express';
const router = Router();

import { createOrder, getOrder, getClient, getOrderById, deleteOrder, updateOrder } from "../controllers/order";

router.post('/', createOrder);
router.get('/', getOrder);
router.get('/:id', getOrderById);
router.delete('/:id', deleteOrder);
router.get('/client', getClient);
router.put('/:id', updateOrder); 

export default router;
