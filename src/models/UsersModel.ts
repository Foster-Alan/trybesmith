import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IPostUser } from '../interfaces/usersInterface';

export default class UsersModel {
  private connection = conn;

  async postUser(postObj: IPostUser) {
    const { username, vocation, level, password } = postObj;
    const query = `
      INSERT INTO Trybesmith.users(username,vocation,level,password)
      VALUES(?,?,?,?);
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    return insertId;
  }
}