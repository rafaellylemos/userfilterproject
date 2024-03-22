import { NgModule } from "@angular/core";
import { FormatAdressPipe } from "./endereco.pipe";
import { PhoneTransformPipe } from "./phone.pipe";
import { StatusTransformPipe } from "./status.pipe";
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    PhoneTransformPipe,
    DashIfEmptyPipe,
    ],
  exports: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    PhoneTransformPipe,
    DashIfEmptyPipe]
})
export class PipesModule {

}