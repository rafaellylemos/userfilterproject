import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({ required: true }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);

    //Pra receber o valor do usuário nos detalhes quando o mesmo for clicado na tabela, vamos fazer um envio de informações do comp filho para o comp pai utilizando o event emitter. 
    //Coloca o output (dá um alias para ele, se preferir), escolhe o nome da prop (é legal utilizar um padrão...tipo, colocar "emitt" no final para sinalizar que está enviando um evento), e depois o new eventemitter, tipado com a interface IUser, dai instancia.
    //No evento de click, você seleciona a prop, emite e diz que o objeto a ser emitido é um "user".
  }
}
