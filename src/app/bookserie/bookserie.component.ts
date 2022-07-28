import { Component, OnInit } from '@angular/core';
import { IBookSeries } from '../interfaces/interfaces';

@Component({
  selector: 'app-bookserie',
  templateUrl: './bookserie.component.html',
  styleUrls: ['./bookserie.component.css']
})
export class BookserieComponent implements IBookSeries, OnInit {

  id: number = 11;
  title: string = 'The Fellowship of the Ring';
  author: string = 'J.R.R.Tolkien';
  yearOfPublishing: number = 1954;
  pages: number = 423;
  image: string = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif';
  genre: string = 'fantasy'
  description: string = 'In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.';
  rate: number = 5;
  cover: string = 'hard';
  price: number = 11;
  bookSerieTitle: string = 'LOTR';
  nextBook?: string = 'Two Towers';
  constructor() { }

  ngOnInit(): void {
  }

}
