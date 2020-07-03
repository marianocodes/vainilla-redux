import { Component } from '@angular/core';
import { AppState } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public state: AppState) {
    // ¿Como cancelo el request? puedes almacenar la subscription y cancelar en onDestroy
    this.state.getProducts();
  }
}
