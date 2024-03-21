import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {
  transform(dataCadastro: string): string {
    const data = new Date(dataCadastro);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

}