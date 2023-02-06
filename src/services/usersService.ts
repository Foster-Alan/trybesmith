import UsersModel from '../models/UsersModel';
import { IPostUser } from '../interfaces/usersInterface';
import TokenUtils from '../utils/JWT';

export default class UsersService {
  model: UsersModel;

  jwt: TokenUtils;

  constructor() {
    this.model = new UsersModel();
    this.jwt = new TokenUtils();
  }

  async postUser(postObj: IPostUser) {
    const id = await this.model.postUser(postObj);
    const token = this.jwt.generateToken({ ...postObj, id });
    return { token };
  }
}