import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from "../Model/Pessoa";

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  form = new FormGroup({
   nome: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(255)]),
   idade: new FormControl(null,[Validators.required,Validators.min(12),Validators.max(120)]),
   cidade: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(255)])
  });

  btnCadastrar:boolean = true;

  pessoas:Pessoa[] = []; 

  // Função de Cadastro

  cadastrarCliente(){
    this.pessoas.push(this.form.value as Pessoa);

    this.form.reset();

    console.table(this.pessoas);

  }

}


