import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.retrieveAll();
  }
}
