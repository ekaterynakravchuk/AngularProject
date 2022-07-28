import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  userName = 'Olya(input name from AppComponent)';

  public doSomething(event: string) {
    console.log(event);
  }
}
