import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  status = [
    {
      value: 'Ativo', 
      viewValue: 'Ativo',
    },
    {
      value: 'Inativo', 
      viewValue: 'Inativo',
    }
  ];
}
