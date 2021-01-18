import { Component } from '@angular/core';
import { AppMock } from './app.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'controle-lancamentos';

  constructor() {
    AppMock.createServer();
  }
}
