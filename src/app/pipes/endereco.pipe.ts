import { Pipe, PipeTransform } from "@angular/core";
import { IAdress } from "../interfaces/user/adress.interface";

@Pipe({
  name: 'formatAdress'
})
export class FormatAdressPipe implements PipeTransform {
  transform(endereco: IAdress): string {
    const INVALID_ADRESS = !endereco || !endereco.rua || !endereco.cidade || !endereco.estado || endereco.numero === null || endereco.numero === undefined;

    if(INVALID_ADRESS) {
      return 'Endereço indisponível ou inválido';
    }
    return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`;
  }

}