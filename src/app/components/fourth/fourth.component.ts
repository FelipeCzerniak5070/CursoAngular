import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth',
  imports: [CommonModule],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  //Variável para exibir/ocultar o quadrado
  visivel:boolean = true;

  exibirEsconder(){
    if(this.visivel){
      this.visivel = false;
    } else {
      this.visivel = true;
    }
  }

}
