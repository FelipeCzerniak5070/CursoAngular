import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  //Função para exibir mensagem

  mensagem(){
    alert("Hello, World")
  }

}
