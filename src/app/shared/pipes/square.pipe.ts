import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarett'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * value;
  }

}
