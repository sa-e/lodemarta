import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Categoria } from '../model';
import { PanelModule } from '../panel/panel.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  categorias!: Categoria[];  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Categoria[]>('https://raw.githubusercontent.com/sa-e/lodemarta/main/src/assets/json/productos.json')
    .pipe(
      map(data => data.map(item => ({titulo: item.titulo, productos: item.productos})))
    )
    .subscribe(categorias => {
      this.categorias = categorias;
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
