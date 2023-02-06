import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  async getAllProducts(req: Request, res: Response) {
    const arrRows = await this.service.getAllProducts();
    res.status(200).json(arrRows);
  }
}

export default new ProductsController();