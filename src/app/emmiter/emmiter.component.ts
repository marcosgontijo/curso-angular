import { Component } from '@angular/core';

@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrl: './emmiter.component.css'
})
export class EmmiterComponent {
  myNumber: number = 0;


  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
