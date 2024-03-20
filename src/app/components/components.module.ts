import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from "@angular/common";
import { FormatAdressPipe } from "../pipes/endereco.pipe";
import { StatusTransformPipe } from "../pipes/status.pipe";

@NgModule({
  declarations: [
    UserDetailsComponent,
    FormatAdressPipe,
    StatusTransformPipe
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
  exports: [
    UserDetailsComponent,
    FormatAdressPipe,
    StatusTransformPipe
  ],
})
export class ComponentsModule {

}