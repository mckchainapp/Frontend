import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosRuc'
})
export class DatosRucPipe implements PipeTransform {

  transform(value: any, FilterPostRuc: any): any {

    if (!value || !FilterPostRuc) {
      return value;  
    }

    let filteredItems = value.filter((list: any) => {

      if(list.rucMinera !== null){
        return list.rucMinera.toLowerCase().includes(FilterPostRuc.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }

}
