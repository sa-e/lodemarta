import { Component } from '@angular/core';
import productosjson from 'src/assets/json/productos.json'
import pizzasjson from 'src/assets/json/pizzas.json'
import { Producto } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lodemarta';

  pizzas: Producto[] = pizzasjson;
  productos: Producto[] = productosjson;
}
