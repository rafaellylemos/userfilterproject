import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'phoneTransform'
})
export class PhoneTransformPipe implements PipeTransform {
  transform(telefone: string): string {

    const INVALID_PHONE = !telefone || telefone.length < 10 || telefone.length > 11;
    //Isso aqui iria na condição do if, só refatorei para melhorar a leitura do código

    if(INVALID_PHONE) {
      return 'Telefone indisponível ou inválido';
    }

    const CELLPHONE = telefone.length === 11;

    if(CELLPHONE) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
    } else {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}`;
    }
  }

}