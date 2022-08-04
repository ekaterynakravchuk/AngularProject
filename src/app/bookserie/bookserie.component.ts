import { Component, Input, OnInit } from '@angular/core';
import { IBookSeries } from '../interfaces/interfaces';

@Component({
  selector: 'app-bookserie',
  templateUrl: './bookserie.component.html',
  styleUrls: ['./bookserie.component.css']
})
export class BookserieComponent implements OnInit {

  @Input() seriesBook: IBookSeries

  constructor() { }

  ngOnInit(): void {
  }

}
