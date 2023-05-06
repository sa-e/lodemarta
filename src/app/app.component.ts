import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartaModule } from './carta/carta.component';
import { InicioModule } from './inicio/inicio.component';
import { BarModule } from './bar/bar.component';

@Component({
  selector: 'app-root',
  template: `
  <app-inicio></app-inicio>
  <app-carta id="carta"></app-carta>
  <app-bar></app-bar>
  ` 
})
export class AppComponent {
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CartaModule,
    InicioModule,
    BarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
