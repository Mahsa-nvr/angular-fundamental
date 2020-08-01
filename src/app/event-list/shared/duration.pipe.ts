import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'Haft Hour'
      case 2: return 'One Hour'
      case 3: return 'Haf Day'
      case 4: return 'Full Day'
      default: return value.toString();
    }
  }
}
