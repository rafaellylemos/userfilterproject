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
}
