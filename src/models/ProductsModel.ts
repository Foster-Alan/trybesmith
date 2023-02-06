import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IPostProduct } from '../interfaces/productsInterface';

export default class ProductsModel {
  private connection = conn;

  async getAll() {
    const query = 'SELECT * FROM Trybesmith.products';
    const [rows] = await this.connection.execute(query);
    return rows;
  }

  async postProduct(postObj: IPostProduct) {
    const { name, amount } = postObj;
    const query = `
      INSERT INTO Trybesmith.products(name,amount)
      VALUES(?,?);
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  }
}