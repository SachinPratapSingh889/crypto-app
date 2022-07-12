import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCur:string="INR"
  constructor()
  {

  }
  sendCurrency(event:string)
  {
    console.log(event)
  }
}
