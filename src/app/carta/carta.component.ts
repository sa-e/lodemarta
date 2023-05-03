import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import productosjson from 'src/assets/json/productos.json'
import pizzasjson from 'src/assets/json/pizzas.json'
import { Producto } from '../model';
import { PanelModule } from '../panel/panel.component';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  pizzas: Producto[] = pizzasjson;
  productos: Producto[] = productosjson;
}

@NgModule({
  declarations: [
    CartaComponent
  ],
  imports: [
    BrowserModule,
    PanelModule
  ],
  exports:[
    CartaComponent
  ]
})
export class CartaModule { }
