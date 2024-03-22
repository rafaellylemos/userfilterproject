import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showUserDetails:boolean = false;
  userSelected: IUser = {} as IUser; //o casting aqui foi feito porque, geralmente, quando você vai pegar um objeto, você pega de uma API e ela não vai te retornar o primeiro objeto logo de cara...ai você coloca um objeto vazio... só que o TS não te deixa colocar o objeto vazio porque você tipou ele com a interface IUser e essa interface tem suas propriedades.... ai você faz o casting. Pra dizer que aquele objeto, mesmo sem saber direito o que é, é do tipo IUser.

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
