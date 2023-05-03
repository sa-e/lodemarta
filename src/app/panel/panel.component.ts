import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

}

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    PanelComponent
  ]
})
export class PanelModule { }
