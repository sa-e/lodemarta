import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import pizzasjson from 'src/assets/json/pizzas.json'
import { Producto } from '../model';
import { PanelModule } from '../panel/panel.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  pizzas: Producto[] = pizzasjson;
  productos!: Producto[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Producto[]>('assets/json/productos.json')
    .pipe(
      map(data => data.map(item => ({nombre: item.nombre, precio: item.precio})))
    )
    .subscribe(productos => {
      this.productos = productos;
    });
  }
}

@NgModule({
  declarations: [
    CartaComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    HttpClientModule
  ],
  exports:[
    CartaComponent
  ]
})
export class CartaModule { }
