import {Router} from 'express';
const router = Router();

import { createDriver, getDriver, deleteDriver, updateDriver, getDriverById, getDriverByDate, asignDriverToOrder, releaseDriver } from "../controllers/driver";

/**
 * Crea un conductor, los parametros son:
 * name
 * El status del conductor siempre sera true
 * status = true (disponible), status = false (no disponible)
 */
router.post('/', createDriver);
/**
 * Obtiene todos los conductores existentes
 */
router.get('/', getDriver);
/**
 * Obtiene un conductor segun el ID de este
 */
router.get('/:id', getDriverById);
/**
 * Elimina un conductor segun el ID de este
 */
router.delete('/:id', deleteDriver);
/**
 * Obtiene el conductor que esta realizando la entrega segun una fecha
 */
router.get('/date/:date', getDriverByDate);
/**
 * Actualiza un conductor por el ID de este
 */
router.put('/:id', updateDriver); 
/**
 * Asigna una orden a un conductor, el id del conductor se asigna en el parametro de la Api, y el ID de la orden en el cuerpo del mensaje
 * El estado del conductor pasa a ser false (no disponible)
 */
router.put('/asignDriver/:id', asignDriverToOrder); 
/**
 * Elimina la orden del conductor
 * El estado del conductor pasa a ser true (disponible)
 */
router.put('/releaseDriver/:id', releaseDriver); 
export default router;