import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements IBook, OnInit {

    id: number = 15;
    title: string = 'Mother Night';
    author: string = ' Kurt Vonnegut';
    yearOfPublishing: number = 1962;
    pages: number = 192;
    image: string = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MotherNight%28Vonnegut%29.jpg/220px-MotherNight%28Vonnegut%29.jpg';
    genre: string = 'metafiction'
    description: string = 'Mother Night is a daring challenge to our moral sense. American Howard W. Campbell, Jr., a spy during World War II, is now on trial in Israel as a Nazi war criminal. But is he really guilty? In this brilliant book rife with true gallows humor, Vonnegut turns black and white into a chilling shade of gray with a verdict that will haunt us all.';
    rate: number = 5;
    cover: string = 'soft';
    price: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
