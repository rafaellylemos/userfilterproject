import { Component } from '@angular/core';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  usersList = UsersList;

  formatarTelefone(telefone: string): string {

    const cleaned = telefone.replace(/\D/g, '');
    
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    
    return telefone;
  }
}
