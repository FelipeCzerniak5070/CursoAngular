import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
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
    this.selecionar()
  }
  ngOnChanges(changes: SimpleChanges) {
    this.selecionar()
    
  }
  // Método de Seleção de Produtos

  selecionar(){
    this.service.selecionar().subscribe(retorno => this.produtos = retorno);
  }

  cadastrarProduto(){
    this.service.cadastrar(this.form.value as Produto).subscribe(retorno => {

      this.produtos.push(retorno);
      this.form.reset(); 

    });
  }

  selecionarProduto(i:number){

    this.form.setValue({
    id:this.produtos[i].id,
    nome:this.produtos[i].nome,
    valor:this.produtos[i].valor
    })

    this.btnCadastrarVisivel=false;

  };

  // Alterar produtos

  alterarProduto(){
    this.service.alterar(this.form.value as Produto).subscribe(retorno => {
      
      //Obter Índice
      let indiceAlterado = this.produtos.findIndex(o => {
        return this.form.value.id ===o.id
      });

      //Alterar Objeto

      this.produtos[indiceAlterado]=retorno;

      this.form.reset();

      this.btnCadastrarVisivel=true;

    }
    );
  }

  removerProduto(){
    
  }

}
