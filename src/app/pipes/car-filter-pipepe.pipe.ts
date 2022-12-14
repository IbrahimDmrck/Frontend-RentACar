import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';


@Pipe({
  name: 'carFilterPipepe'
})
export class CarFilterPipepePipe implements PipeTransform {

  transform(value: CarDetailDto[],filterText:string): CarDetailDto[] {
    
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((c:CarDetailDto)=>(c.brandName||c.carName).toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
 