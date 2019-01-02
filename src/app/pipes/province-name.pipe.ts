import { Pipe, PipeTransform } from '@angular/core';
import { ProvinceModel } from '../models/modelsIndex';


@Pipe({
  name: 'provinceName'
})
export class ProvinceNamePipe implements PipeTransform {

  transform(value: string, args: ProvinceModel[]): string {
    let response = "";
    args.forEach(item => {
      if(value === item.id){
        response = item.name;
        return;
      }
    });
    return response;
  }

}
