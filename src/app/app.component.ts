import { Component } from '@angular/core';
import { IBook, IBookSeries } from './interfaces/interfaces';
import { singleBooks } from './data/singlebooks';
import { seriesBook } from './data/bookseries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  userName:any = 'stranger';

  singleBooks: IBook[] = singleBooks
  seriesBooks: IBookSeries[] = seriesBook


}
