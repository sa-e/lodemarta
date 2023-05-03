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
 @Input()
 titulo!: string

 @Input()
 productos!: Producto[]
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
