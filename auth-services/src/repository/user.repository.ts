import { Inject, Service } from "typedi";
import ExcuteQuery from "../config/excute.config.js";
import { IUser } from "../interface/user.interface.js";
import { RowDataPacket } from "mysql2";

@Service()
export class UserRepository{
  constructor(@Inject() private excuteQuery: ExcuteQuery) {}
   async  findByEmail(email:string){
    const result= await this.excuteQuery.select<IUser & RowDataPacket[]>("SELECT id,email  FROM users WHERE email = ?",[email]);
     console.log('debug',result)
    return result.length > 0 ? result[0] : null;
}
}