import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookserieComponent } from './bookserie.component';

describe('BookserieComponent', () => {
  let component: BookserieComponent;
  let fixture: ComponentFixture<BookserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
