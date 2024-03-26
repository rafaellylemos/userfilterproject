import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPED = name === undefined;

  if(NAME_NOT_TYPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))

  return filteredList;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if(STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status)
  
  return filteredList;
}

const filterUsersListByData = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if(DATES_NOT_SELECTED) {
    return usersList;
    // esse usersList é o que o método recebe de parâmetro. Isso vale para todos os métodos anteriores.
  }

  const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
    start: startDate,
    end: endDate,
  });

  const listFiltered = usersList.filter(checkDateInterval);

  return listFiltered;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

//filterUserList é um método que foi criado por mim para executar a lógica de filtro e retornar a lista filtrada. Acima, eu estou declarando esse método.

  filteredList = filterUsersListByName(filterOptions.name, usersList);

  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersListByData(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
} //função de filtro base que irá chamar todas as outras

export { filterUsersList };
