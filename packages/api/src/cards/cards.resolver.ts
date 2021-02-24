import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cards, Card } from './cards.schema.gql';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';

const cardsGenerate = count => {
  const ret = [];
  for (let i = 0; i < count; i += 1) {
    const card = new Card()
    card.title = `title-${i}`
    card.comm = `comm-${i}`
    card.body = `body-${i}`
    ret.push(card)
  }
  return ret;
};

@Resolver()
export class CardsResolver {

  constructor(private cardsService: CardsService) {
  }

  @Query(returns => Cards, {name: 'cards'})
  async getCards() {
    const all = this.cardsService.findAll()
    return {
      cards: all
    }
  }

  @Mutation(returns => Card)
  async cardCreate(@Args({name: 'title', type: () => String}) title: string) {
    const dto = new CreateCardDto()
    dto.title = title
    return this.cardsService.create(dto)
  }

}

