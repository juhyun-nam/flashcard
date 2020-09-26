export interface Card {
  front: string | Array<string>;
  back: string | Array<string>;
}

export interface CardView {
  subject: string;
  front: string | Array<string>;
  back: string | Array<string>;
}

export interface Cards {
  subject: string;
  contents: Array<Card>;
}
