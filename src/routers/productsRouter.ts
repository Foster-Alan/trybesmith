import express from 'express';
import ProductsController from '../controllers/productsController';

const router = express.Router();

router.get('/', (req, res) => ProductsController.getAllProducts(req, res));

export default router;