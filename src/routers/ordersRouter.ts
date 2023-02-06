import express from 'express';
import OrdersController from '../controllers/ordersController';

const router = express.Router();

router.get('/', (req, res) => OrdersController.getAllOrders(req, res));

export default router;