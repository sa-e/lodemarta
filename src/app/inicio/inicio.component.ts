import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  goToCarta() {
    document.getElementById("carta")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports:[
    InicioComponent
  ]
})
export class InicioModule { }