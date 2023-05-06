import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
}

@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    BarComponent
  ]
})
export class BarModule { }
