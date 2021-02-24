import { InjectModel } from "@nestjs/mongoose";
import { COLL_USER } from "src/consts";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(COLL_USER) private readonly usersModel: Model<User>) {

  }

  async create(dto: UserDto): Promise<User> {
    const userModel = new this.usersModel(dto)
    return userModel.save()
  }

  async findAll(): Promise<User[]> {
    return this.usersModel.find().exec()
  }

  async findOne(email: string): Promise<User> {
    const user = await this.usersModel.findOne({email}).exec()
    return user
  }

  async update(id, data): Promise<User> {
    return this.usersModel.findByIdAndUpdate(id, data, {new: true})
  }
}
