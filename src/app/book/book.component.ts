import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../interfaces/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() singleBook: IBook

  public description = false

  constructor() { }

  ngOnInit(): void {
  }

}

