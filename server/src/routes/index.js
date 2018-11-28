import { Router } from 'express';
import serviceRouter from './service';
import traineeRouter from './trainee';
import trainerRouter from './trainer';
import tsRouter from './trainerservice'
import userRouter from './user';
import reviewRouter from './review';
import addressRouter from './address';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/trainer', trainerRouter);
router.use('/review', reviewRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/trainee', traineeRouter);
router.use('/service', serviceRouter);
router.use('/user', userRouter);
router.use('/address', addressRouter);
router.use('/trainerservice', tsRouter);

export default router;