import { Card } from './Card';

export interface Action {
  type: 'CARDS';
  cards: Array<Card>;
}

export function CardsAction(cards: Array<Card>): Action {
  return { type: 'CARDS', cards };
}
