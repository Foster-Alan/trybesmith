import express from 'express';
import productsRouter from './routers';
import error from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use(error);

export default app;
