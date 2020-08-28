import Card from './types/Card';
import StudyMethod from './types/StudyMethod';
import cards from './data/cards.json';

class CardContainer {
  private cards: Array<Card>;

  private index: number;

  private reverse: boolean;

  getContent() {
    const current = this.cards[this.index];
    if (this.reverse) {
      return { front: current.back, back: current.front };
    }
    return { front: current.front, back: current.back };
  }

  constructor() {
    this.cards = [];
    this.index = 0;
    this.reverse = false;
  }

  apply(subjects: Array<string>, method: StudyMethod) {
    cards.data.forEach((item) => {
      if (subjects.includes(item.subject)) {
        this.cards = this.cards.concat(item.contents);
      }
    });
    switch (method) {
      case StudyMethod.SHUFFLE:
        this.cards.sort(() => Math.random() - 0.5);
        break;
      case StudyMethod.SHUFFLE_REVERSE:
        this.cards.sort(() => Math.random() - 0.5);
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
