import { Router } from 'express';
import peopleRouter from './people';
import traineeRouter from './trainee';
import trainerRouter from './trainer';
import userRouter from './user';
import reviewRouter from './review';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/trainer', trainerRouter);
router.use('/review', reviewRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/trainee', traineeRouter);
router.use('/people', peopleRouter);
router.use('/user', userRouter);

export default router;