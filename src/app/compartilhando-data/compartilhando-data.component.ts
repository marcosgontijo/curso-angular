import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compartilhando-data',
  templateUrl: './compartilhando-data.component.html',
  styleUrl: './compartilhando-data.component.css'
})
export class CompartilhandoDataComponent {
  @Input() userData!: {email: string, role:string}

}
