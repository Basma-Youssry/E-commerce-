import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})

export class TermtextPipe implements PipeTransform {

  transform(term:string, limit:number): string {
    return term.split(' ').slice(0, limit).join(' ');
  }

}
