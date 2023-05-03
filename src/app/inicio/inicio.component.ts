import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports:[
    InicioComponent
  ]
})
export class InicioModule { }