import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from '../interfaces/interfaces';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements ICustomer, OnInit {
  @Input() id: number = 1;
  @Input() name: string = '';
  birthDate: Date = new Date;
  email: string = '123@gmail.com';

  constructor() { }

  
  
  ngOnInit(): void {
  }

}
