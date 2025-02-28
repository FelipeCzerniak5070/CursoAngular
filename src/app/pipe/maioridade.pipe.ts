import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maioridade'
})
export class MaioridadePipe implements PipeTransform {

  transform(n:any): boolean {
    return (n.idade>=18);
  }

}
