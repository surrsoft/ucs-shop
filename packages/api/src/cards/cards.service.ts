import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

import { Card } from "./interfaces/card.interface";
import { CreateCardDto } from "./dto/create-card.dto";
import { COLL_CARD } from "../consts";

@Injectable()
export class CardsService {

  constructor(@InjectModel(COLL_CARD) private readonly cardsModel: Model<Card>) {
  }

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createCard = new this.cardsModel(createCardDto);
    return createCard.save();
  }

  async findAll(): Promise<Card[]> {
    return this.cardsModel.find().exec()
  }
}
