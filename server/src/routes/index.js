import { Router } from 'express';
import serviceRouter from './service';
import traineeRouter from './trainee';
import trainerRouter from './trainer';
import tsRouter from './trainerservice';
import userRouter from './user';
import reviewRouter from './review';
import addressRouter from './address';
import eventeRouter from './events';
import authRouter from './auth';
// import usersRouter from './users'
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import roomsRouter from './rooms';
import messagesRouter from './messages';

// import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

// router.use('/users', usersRouter)
router.use('/auth', authRouter);
router.use('/trainer', trainerRouter);



router
    .route('*')
    .get()
    .post()
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/review', reviewRouter);
router.use('/trainee', traineeRouter);
router.use('/event', eventeRouter);
router.use('/service', serviceRouter);
router.use('/user', userRouter);
router.use('/address', addressRouter);
router.use('/trainerservice', tsRouter);
router.use('/rooms', roomsRouter);
router.use('/messages', messagesRouter);

export default router;
