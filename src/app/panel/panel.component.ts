import { Component, Input, NgModule} from '@angular/core';
import { Producto } from '../model';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  url!: string

  @Input()
  titulo!: string

  @Input()
  productos!: Producto[]

  ngOnInit() {
    this.url= `https://raw.githubusercontent.com/sa-e/lodemarta/main/src/assets/images/${this.titulo}.png`;
    console.log(this.url)
  }
}

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports:[
    PanelComponent
  ]
})
export class PanelModule { }
