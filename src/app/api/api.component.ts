import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../Model/Produto';
import { ProdutoService } from '../service/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Pessoa } from '../Model/Pessoa';

@Component({
  selector: 'app-api',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  constructor(private service:ProdutoService){}

  // Objeto de Formulário

  form= new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(""),
    valor: new FormControl(null)
  });

  indice:number=-1;

  //Botões Visíveis
  btnCadastrarVisivel:boolean=true;

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

  cadastrarProduto(){
    this.service.cadastrar(this.form.value as Produto).subscribe(retorno => {

      this.produtos.push(retorno);
      this.form.reset(); 

    });
  }

}
