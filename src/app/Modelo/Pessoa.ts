class Pessoa{
    private nome:string;
    private idade:number;
    private cidade:string;

    //constructor(...args: [nome: string, idade: number, cidade: string]) {

    //}
      // Getters
      getNome(): string {
        return this.nome;
      }
    
      getIdade(): number {
        return this.idade;
      }
    
      getCidade(): string {
        return this.cidade;
      }
    
      // Setters
      setNome(nome: string): void {
        this.nome = nome;
      }
    
      setIdade(idade: number): void {
        this.idade = idade;
      }
    
      setCidade(cidade: string): void {
        this.cidade = cidade;
      }


}