import { Action } from './actions';
import { Card } from './Card';

export interface AppState {
  cards: Array<Card>;
}

const defaultState: AppState = {
  cards: [],
};

export default function reducer(state = defaultState, action: Action): AppState {
  switch (action.type) {
    case 'CARDS':
      return { ...state, cards: action.cards } as AppState;
    default:
      return state;
  }
}
