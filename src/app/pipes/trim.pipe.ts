import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, args?: number): any {
   if (args == null || value.length <= args) {
      return value;
   }
   let r = '';
   for ( let x = 0; x < value.length; x++) {
     if ( x >= args) {
      return r + '...';
     }
      r = r + value.charAt(x);
   }
   return r + '...';
  }

}
