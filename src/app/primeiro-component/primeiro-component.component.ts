import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrl: './primeiro-component.component.css'
})
export class PrimeiroComponentComponent {
  @Input() primeiroComponentData! :{nome: string, idade: number, funcao: string}
}
