import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'phoneTransform'
})
export class PhoneTransformPipe implements PipeTransform {
  transform(telefone: string): string {
    const cleaned = telefone.replace(/\D/g, '');
    
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    
    return telefone;
  }

}