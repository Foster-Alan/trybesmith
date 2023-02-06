import express from 'express';
import { productsRouter, usersRouter, ordersRouter } from './routers';
import error from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use(error);

export default app;
