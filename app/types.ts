export interface OverviewType {
  icon: string;
  title: string;
  description: string;
  value: string;
}

export interface CardType {
  image: string;
  title: string;
  description: string;
}

export interface BoxHeaderTypes {
  title: string;
}

export interface CoursesType {
  title: string;
  content: CardType[];
}
