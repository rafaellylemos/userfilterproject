import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';

import { FormatAdressPipe } from "../pipes/endereco.pipe";
import { StatusTransformPipe } from "../pipes/status.pipe";
import { DateTransformPipe } from "../pipes/date.pipe";
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FormatAdressPipe,
    StatusTransformPipe,
    DateTransformPipe,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    UserDetailsComponent,
    FormatAdressPipe,
    StatusTransformPipe,
    DateTransformPipe,
    FilterComponent,
    UsersListComponent
  ],
})
export class ComponentsModule {
  
}