import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  async getAllOrders(req: Request, res: Response) {
    const arrRows = await this.service.getAllOrders();
    res.status(200).json(arrRows);
  }
}

export default new OrdersController();