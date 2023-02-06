import conn from './connection';

export default class OrdersModel {
  private connection = conn;

  async getAllOrders() {
    const query = `
    SELECT  orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products 
    ON products.order_id = orders.id GROUP BY orders.id
    `;
    const [rows] = await this.connection.execute(query);
    return rows;
  }
}