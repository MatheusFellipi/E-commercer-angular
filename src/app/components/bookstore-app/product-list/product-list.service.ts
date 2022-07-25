import { Injectable } from '@angular/core';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = null;

  constructor() {}

  retrieveAll(): Book[] {
    return PRODUCT;
  }

  retrieveById(id: string): Book | undefined {
    return PRODUCT.find((bookIterador: Book) => bookIterador.id === id);
  }
}

const PRODUCT = [
  {
    id: '1',
    category: 'terror',
    img: '',
    name: 'mortos vivos',
    price: 9.99,
    quantity: 5,
  },
  {
    id: '2',
    category: 'terror',
    img: '',
    name: 'mortos vivos 2',
    price: 9.99,
    quantity: 5,
  },
] as Book[];
