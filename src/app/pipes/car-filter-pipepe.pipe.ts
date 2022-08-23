import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilterPipepe'
})
export class CarFilterPipepePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
