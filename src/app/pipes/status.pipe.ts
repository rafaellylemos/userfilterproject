import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "../interfaces/user/user.interface";

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {
  transform(ativo: boolean): string {
    const INVALID_STATUS = ativo === undefined || ativo === null;
    
    if(INVALID_STATUS) {
      return 'Status indisponível ou inválido';
    } 

    return ativo ? 'Ativo' : 'Inativo';
    //Aqui, fiz um ternário. Se ativo for true(?) retorna 'Ativo', se for false(:) retorna 'Inativo'
  }
}