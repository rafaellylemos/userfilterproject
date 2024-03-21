import { NgModule } from "@angular/core";
import { DateTransformPipe } from "./date.pipe";
import { FormatAdressPipe } from "./endereco.pipe";
import { PhoneTransformPipe } from "./phone.pipe";
import { StatusTransformPipe } from "./status.pipe";

@NgModule({
  declarations: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    DateTransformPipe,
    PhoneTransformPipe,
    ],
  exports: [ 
    FormatAdressPipe,
    StatusTransformPipe,
    DateTransformPipe,
    PhoneTransformPipe]
})
export class PipesModule {

}