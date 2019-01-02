import { Pipe, PipeTransform } from '@angular/core';
import { DeparmentModel } from '../models/modelsIndex';


@Pipe({
  name: 'departmentName'
})
export class DepartmentNamePipe implements PipeTransform {

  transform(value: string, args: DeparmentModel[]): string {
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
