import {Router} from 'express';
const router = Router();

import { createOrder, getOrder, getClient, getOrderById, deleteOrder, updateOrder } from "../controllers/order";

/*Crea una nueva orden, los parametros son: 
name,lastname,email,phone,address,date,min_hour,max_hour
Ejemplo date: 2020-03-12
Ejemplo min_hour: 08:00:00
Ejemplo max_hour: 12:00:00
La Api crea una orden, crea un cliente y una direccion
*/
router.post('/', createOrder);
/**
 * Obtiene todas las ordenes existentes
 */
router.get('/', getOrder);
/**
 * Obtiene una orden segun el ID de esta
 */
router.get('/:id', getOrderById);
/**
 * Elimina una orden segun el ID de esta
 */
router.delete('/:id', deleteOrder);
/**
 * Obtiene todos los clientes existentes
 */
router.get('/client', getClient);
/**
 * Actualiza un cliente segun ID de este
 */
router.put('/:id', updateOrder); 

export default router;
