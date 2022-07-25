import { Component, OnInit } from '@angular/core';
import { Book } from './product-list/model/Book';
import { BookService } from './product-list/product-list.service';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.retrieveAll();
  }

}
