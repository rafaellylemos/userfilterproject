import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input({ required: true }) user:IUser = {} as IUser;
//Casting = coloquei o "as" para indicar que o objeto vazio é do tipo IUser, se não, eu iria tomar um erro de tipagem TS

  formatarTelefone(telefone: string): string {

    const cleaned = telefone.replace(/\D/g, '');
    
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    
    return telefone;
  }
}
