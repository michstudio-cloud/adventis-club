
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface Program {
  id: string;
  name: string;
  age: string;
  description: string;
  param: 'aventureros' | 'conquistadores' | 'gm';
  color: string;
}
