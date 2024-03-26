import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  showUserDetails:boolean = false;

  ngOnInit(){
    setTimeout(() => {
      this.usersList = UsersList; //Aqui, é como se UsersList fosse a API...a gente tá atribuindo a userslList (ou seja, a const que criamos para representar nossa lista) o resultado da requisição http.
      this.usersListFiltered = this.usersList; //Aqui, a gente atribui a lista filtrada (userListFiltered) o resultado da lista geral também. Importante ler a observação em app.component.html para entender 100% como será usada.
    }, 1);
  }
  userSelected: IUser = {} as IUser; //o casting aqui foi feito porque, geralmente, quando você vai pegar um objeto, você pega de uma API e ela não vai te retornar o primeiro objeto logo de cara...ai você coloca um objeto vazio... só que o TS não te deixa colocar o objeto vazio porque você tipou ele com a interface IUser e essa interface tem suas propriedades.... ai você faz o casting. Pra dizer que aquele objeto, mesmo sem saber direito o que é, é do tipo IUser.

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList)
  }
}
