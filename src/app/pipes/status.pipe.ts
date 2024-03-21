import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "../interfaces/user/user.interface";

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {
  transform(ativo: boolean): string {
   if(ativo) {
    return 'Sim'
   } else {
    return 'Não'
   }
  }
}