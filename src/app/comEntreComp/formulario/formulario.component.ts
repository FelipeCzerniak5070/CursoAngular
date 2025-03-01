import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nome:string = "";

  @Output() funcao = new EventEmitter<string>();
  cadastrarNome(){
     this.funcao.emit(this.nome);
  }

}
