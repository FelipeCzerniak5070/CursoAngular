import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../Model/Produto';
import { ProdutoService } from '../service/produto.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  constructor(private service:ProdutoService){}

  //Vetor de Produtos da API
  produtos:Produto[]=[];

  // Inicialização do Component
  ngOnInit(){
    this.selecionarProduto()
  }

  // Método de Seleção de Produtos

  selecionarProduto(){
    this.service.selecionar().subscribe(retorno => this.produtos = retorno);

  }

}
