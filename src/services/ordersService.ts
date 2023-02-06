import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async getAllOrders() {
    const arrRows = await this.model.getAllOrders();
    return arrRows;
  }
}