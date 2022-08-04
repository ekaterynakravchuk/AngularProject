import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BookComponent } from './book/book.component';
import { BookserieComponent } from './bookserie/bookserie.component';
import { HighlightDirective } from './highlight.directive';
import { PopupDirective } from './popup.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookComponent,
    BookserieComponent,
    HighlightDirective,
    PopupDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
