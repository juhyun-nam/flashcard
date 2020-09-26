import { Card, CardView } from './types/Card';
import StudyMethod from './types/StudyMethod';
import cards from './data/cards.json';

function Shuffle(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class CardContainer {
  private cards: Array<CardView>;

  private index: number;

  private reverse: boolean;

  getContent() {
    const current = this.cards[this.index];
    if (this.reverse) {
      return { ...current, front: current.back, back: current.front };
    }
    return current;
  }

  constructor() {
    this.cards = [];
    this.index = 0;
    this.reverse = false;
  }

  apply(subjects: Array<string>, method: StudyMethod) {
    cards.data.forEach((item) => {
      if (subjects.includes(item.subject)) {
        item.contents.forEach((elem: Card) => {
          this.cards.push({ subject: item.subject, front: elem.front, back: elem.back });
        });
      }
    });
    switch (method) {
      case StudyMethod.SHUFFLE:
        Shuffle(this.cards);
        break;
      case StudyMethod.SHUFFLE_REVERSE:
        Shuffle(this.cards);
        this.reverse = true;
        break;
      default:
        break;
    }
  }

  hasNext() {
    return this.index < this.cards.length - 1;
  }

  hasPrev() {
    return this.index > 0;
  }

  next() {
    this.index += 1;
  }

  prev() {
    this.index -= 1;
  }
}

export default new CardContainer();
