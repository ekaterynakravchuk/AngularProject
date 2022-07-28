import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BookComponent } from './book/book.component';
import { BookserieComponent } from './bookserie/bookserie.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookComponent,
    BookserieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
