import { Pipe, PipeTransform } from "@angular/core";
import { IAdress } from "../interfaces/user/adress.interface";

@Pipe({
  name: 'formatAdress'
})
export class FormatAdressPipe implements PipeTransform {
  transform(endereco: IAdress): string {
    return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}, ${endereco.estado} - ${endereco.pais}`;
  }

}