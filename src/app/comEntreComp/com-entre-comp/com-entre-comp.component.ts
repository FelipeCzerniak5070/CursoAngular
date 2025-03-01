import { Component } from '@angular/core';
import { TabelaComponent } from "../tabela/tabela.component";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-com-entre-comp',
  imports: [TabelaComponent, FormularioComponent],
  templateUrl: './com-entre-comp.component.html',
  styleUrl: './com-entre-comp.component.css'
})
export class ComEntreCompComponent {
  nomes:string[] = [
    'Felipe', 'Mary', 'Chimia', 'Pelica', 'Epona'
  ];

  cadastrar(nome:string){
    this.nomes.push(nome);
  }

}
