import express from 'express';
import { healthCheck, setUser, setGeofencing, setCommand } from '../controller';
import validations, { setGeofencingValidation, setUserValidation } from '../utils/validations';

const router = express.Router();

router.get('/health', healthCheck);
router.post('/user', validations(setUserValidation), setUser);
router.post('/geofence', validations(setGeofencingValidation), setGeofencing);
router.post('/command', setCommand);

export default router;
