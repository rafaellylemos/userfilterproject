import { NgModule } from "@angular/core";
import { FormatAdressPipe } from "./endereco.pipe";
import { PhoneTransformPipe } from "./phone.pipe";
import { StatusTransformPipe } from "./status.pipe";

@NgModule({
  declarations: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    PhoneTransformPipe,
    ],
  exports: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    PhoneTransformPipe]
})
export class PipesModule {

}