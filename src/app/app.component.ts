import { Component } from '@angular/core';
import productosjson from 'src/assets/json/productos.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lodemarta';

  productos: any = productosjson
}
