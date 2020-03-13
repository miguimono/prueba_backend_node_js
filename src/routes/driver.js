import {Router} from 'express';
const router = Router();

import { createDriver, getDriver, deleteDriver, updateDriver, getDriverById, getDriverByDate, asignDriverToOrder, releaseDriver } from "../controllers/driver";

router.post('/', createDriver);
router.get('/', getDriver);
router.get('/:id', getDriverById);
router.delete('/:id', deleteDriver);
router.get('/date/:date', getDriverByDate);
router.put('/:id', updateDriver); 

router.put('/asignDriver/:id', asignDriverToOrder); 
router.put('/releaseDriver/:id', releaseDriver); 
export default router;