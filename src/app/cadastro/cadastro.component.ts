import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from "../Model/Pessoa";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  form = new FormGroup({
   nome: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(255)]),
   idade: new FormControl(null,[Validators.required,Validators.min(12),Validators.max(120)]),
   cidade: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(255)])
  });

  btnCadastrar:boolean = true;

  pessoas:Pessoa[] = [
    (new Pessoa("Felipe",18,"Caçador")),
    (new Pessoa("Mary",16,"Caçador")),
    (new Pessoa("Chimia",10,"Caçador"))
  ];
  
  indice:number = -1;

  // Função de Cadastro

  cadastrarCliente(){

    if(this.form.valid){

      this.pessoas.push(this.form.value as Pessoa);
      
      this.form.reset();
      
      console.table(this.pessoas);
    } else {
      console.log("Formulário inválido");
    }
      
  }


  selecionarCliente(indice:number){
    this.indice=indice;

    this.form.setValue({
      nome: this.pessoas[indice].nome,
      idade: this.pessoas[indice].idade,
      cidade: this.pessoas[indice].cidade
    });

    this.btnCadastrar=false;

  }

  alterarCliente(){
    this.pessoas[this.indice] = this.form.value as Pessoa;

    this.form.reset();

    this.btnCadastrar=false;

  }

  removerCliente(){
    this.pessoas.splice(this.indice, 1);

    this.form.reset();

    this.btnCadastrar=true;

  }

  cancelarAcao(){
    this.form.reset();
    this.btnCadastrar=true;
  }


  listarPessoas(){
    
    this.pessoas.forEach(element => {
      
    });
  }

}


